import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { compare, genSalt, hash } from 'bcryptjs';
import { IJWTPayload, ResponseInterface } from '../../dto-interface/interface';
import { decrypt, encrypt, generateRandomString, sendEmail, sendWhatsappMessage } from '../../services';
import { UserVerificationEntity } from '../user-verification/user-verification.entity';
import { getConnection, Like, Repository } from 'typeorm';
import { generateRandomInteger } from '../../services/helpers/utilities';
import { SigninDto, SignupDto } from '../../dto-interface/dto';
import { Configuration } from '../../config/config.keys';
import { ConnectionEntity } from '../connection/connection.entity';
import { SocketService } from '../socket/socket.service';
import { UserTokenEntity } from './user-token.entity';

// tslint:disable-next-line:no-var-requires
const requestIp = require('request-ip');
// tslint:disable-next-line:no-var-requires
const useragent = require('useragent');
const moment = require('moment');

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly authRepository: AuthRepository,
    @InjectRepository(UserVerificationEntity)
    private readonly userVerificationRepository: Repository<UserVerificationEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly socketService: SocketService,
    @InjectRepository(ConnectionEntity)
    private readonly connectionRepository: Repository<ConnectionEntity>,
    @InjectRepository(UserTokenEntity)
    private readonly tokenEntityRepository: Repository<UserTokenEntity>,
    private readonly jwtService: JwtService) {
  }

  async signup(signupDto: SignupDto): Promise<ResponseInterface> {
    const { name, lastName, email, country } = signupDto;
    const userExists = await this.authRepository.findOne({
      where: [{ email }],
    });
    if (userExists) {
      return {
        statusCode: 400,
        error: 'Email already exist',
        message: null,
      };
    }
    const users = (await this.userRepository.find({
        where: [{
          type: '["administrator"]',
          status: 1,
        }, { type: '["calibrator"]', status: 1 }],
      })
    ).map((e) => e.id);
    this.socketService.emitToUsers(users, 'notify', {
      id: '',
      text: `Name: ${name} ${lastName} From: ${country}`,
      title: 'New user',
      time: moment(new Date()),
      type: 'newUser',
    });

    return this.authRepository.signup(signupDto);
  }

  async signin(body: SigninDto, req) {
    const { email, password } = body;
    const user: User = await this.authRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new HttpException('invalid_credentials', 433);
    } else {
      const query = 'SELECT user_id, email from user_verification where user_id = ' + user.id;
      const data = await getConnection().query(query);
      if (data.length > 0) {
        const dataEmail = JSON.parse(data[0].email);
        if (Number(dataEmail.status) === Number(1)) {
          const isMatch = await compare(decrypt(password), user.password);
          if (!isMatch) {
            throw new HttpException('invalid_credentials', 433);
          } else {
            if (user.status !== 1) {
              throw new HttpException('user in validation', 403);
            }
            const payload: IJWTPayload = {
              id: user.id,
              email: user.email,
              username: user.name,
              role: user.type,
            };
            const currentIp = requestIp.getClientIp(req);
            const connections = await getConnection().query('select user_id, ip, COUNT(*) as quantity from conections where user_id = ' + user.id + ' group by ip');
            if (connections.length) {
              const connection = connections.filter(x => {
                if (x.ip !== null) {
                  return x.ip.toString() === currentIp.toString();
                }
                return false;
              });
              if (connection.length > 0) {
                if (connection[0].quantity < 3) {
                  await sendEmail({
                    to: user.email,
                    subject: 'LOGIN',
                    html: 'login',
                    data: {
                      ip: currentIp, fecha: new Date(), name: user.name + ' ' + user.lastName,
                      token: `${await encrypt(JSON.stringify({ id: user.id, email: user.email }))}`,
                    },
                  });
                }
              } else {
                await sendEmail({
                  to: user.email,
                  subject: 'LOGIN',
                  html: 'login',
                  data: {
                    ip: currentIp, fecha: new Date(), name: user.name + ' ' + user.lastName,
                    token: `${await encrypt(JSON.stringify({ id: user.id, email: user.email }))}`,
                  },
                });
              }
            }
            await this.connectionRepository.save({
              userId: user.id,
              ip: currentIp,
              type: JSON.stringify(user.type),
              agent: JSON.stringify(useragent.parse(req.headers['user-agent'])),
            });
            const token = await this.jwtService.sign(payload);
            this.tokenEntityRepository.save({ userId: user.id, token });
            return {
              token,
              id: user.id,
              name: user.name + ' ' + user.lastName,
              type: await encrypt(JSON.stringify(user.type)),
              status: user.status,
            };
          }
        } else {
          throw new HttpException({ message: 'email_no_validate', id: user.id }, 406);
        }
      }
    }
  }

  async validateEmail(id: number, code: number): Promise<ResponseInterface> {
    const query = 'SELECT user_id, email from user_verification where user_id = ' + id;
    const data = await getConnection().query(query);
    if (data.length > 0) {
      const email = JSON.parse(data[0].email);
      if (Number(email.code) === Number(code)) {
        email.status = 1;
        email.code = generateRandomInteger(10);
        await getConnection()
          .createQueryBuilder()
          .update(UserVerificationEntity)
          .set({ email: JSON.stringify(email) })
          .where('user_id = :id', { id })
          .execute();
        return { statusCode: 200, error: '', message: 'Email validate' };
      } else {
        return { statusCode: 400, error: 'Code incorrect', message: null };
      }
    } else {
      return { statusCode: 400, error: 'User incorrect', message: null };
    }
  }

  async dealers(param): Promise<ResponseInterface> {
    const user = await this.userRepository.find({
      where: [{ type: Like('%dealer%'), country: Like(`%${param.country}%`) }, {
        type: Like('%distributor%'),
        country: Like(`%${param.country}%`),
      }],
    });
    const names = [];
    user.forEach(item => {
      names.push({
        value: item.id,
        text: item.name + ' ' + item.lastName,
      });
    });
    return { statusCode: 200, error: '', message: names };
  }

  async newUsers(body): Promise<ResponseInterface> {
    const count = await this.userRepository.find({
      where: { status: 0 },
    });

    return {
      statusCode: 200,
      error: null,
      message: count.length,
    };
  }

  async recoveryPassword(body) {
    const user = await this.userRepository.findOne({ where: { email: body.email } });
    if (user != null) {
      const verification = await this.userVerificationRepository.findOne({ where: { userId: user.id } });
      if (verification != null) {
        await sendEmail({
          data: { name: user.name + user.lastName, hash: verification.password, id: user.id },
          to: user.email,
          subject: 'RECOVERY PASSWORD - TVS GROUP INTERNATIONAL',
          html: 'recovery-password',
        });
      }
    }
    return { statusCode: 200, error: '', message: '' };
  }

  async validateCodePassword(body) {
    const verification = await this.userVerificationRepository.findOne({ where: { password: body.token } });
    if (verification) {
      return {
        user_id: verification.userId,
      };
    } else {
      throw new HttpException('invalid_token', HttpStatus.FORBIDDEN);
    }
  }

  async updatePassword(body) {
    const salt = await genSalt(12);
    const password = await hash(body.password, salt);
    await this.userRepository.update({ id: body.id }, { password });
    const code = generateRandomString(30);
    await this.userVerificationRepository.update({ userId: body.id }, { password: code });
    return { statusCode: 200, error: '', message: '' };
  }

  async resendVerification(body) {
    if (body.id != '') {
      const user = await this.userRepository.findOne({ where: { id: body.id } });
      const verification = await this.userVerificationRepository.findOne({ where: { userId: body.id } });
      const email = JSON.parse(verification.email);
      const today = new Date().getTime();

      if (body.type.toString() === 'email') {
        sendEmail({
          data: { name: user.name + user.lastName, hash: email.code, id: user.id },
          to: user.email,
          subject: 'VERIFICATION EMAIL - TVS GROUP INTERNATIONAL',
          html: 'verify',
        });
      } else {
        sendWhatsappMessage(Configuration.NUMBER_WHATSAAP, 'NEW CUSTOM DEALER REQUEST FORM. Name: ANDRES SANTOS');
      }
    }
    return {
      statusCode: 200,
      error: '',
      message: 'send',
    };
  }

  async verifyToken(token) {
    return await this.tokenEntityRepository.findOne({ token }) !== undefined;
  }

  removeTokensForUser(body: any) {
    this.tokenEntityRepository.delete({ userId: body.id }).then();
  }

  async testa() {
    // let data = await getConnection().query('select * from order_software where id = 2');
    // let user = await getConnection().query('select * from user where id = 2');
    // data = data[0];
    // user = user[0];
    // const description = JSON.parse(data.description);
    // let rows = '';
    // description.item.forEach(item => {
    //   rows += '<tr class="item">';
    //   rows += '<td>' + item.name + ' </td>' +
    //     '<td>' +
    //     '<ul style="list-style: none;">';
    //   item.options.forEach(value => {
    //           rows += '<li>' + value.description + '</li>';
    //         });
    //   rows += '</ul> ' +
    //     '</td>';
    //   rows += '</tr>';
    // });
    //
    // sendEmail({
    //   data: {
    //     numberOrder: data.order_id,
    //     dateNow: data.createdAt,
    //     name: user.name,
    //     lastName: user.lastname,
    //     email: user.email,
    //     phone: user.phone,
    //     country: user.country,
    //     dealerId: data.userId,
    //     vin: data.VIN,
    //     vehicle: data.vehicle,
    //     credit: 0,
    //     items: rows,
    //     type: data.type,
    //     status: 'New',
    //     urgency: data.urgency,
    //     description: JSON.parse(data.description),
    //   },
    //   html: 'order-software',
    // });
    // return {
    //   statusCode: 200,
    //   error: '',
    //   message: 'send',
    // };

    const body: any = { user_id: 2, credits: '4000', price: '5000' };
    const discount = Math.round(((body.credits - body.price) / body.credits) * 100);
    const url = await encrypt(JSON.stringify(body));
    const user = await this.userRepository.findOne(body.user_id);
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const response = await sendEmail({
      to: 'lev3l666@gmail.com',
      subject: 'CREDITS OFFER',
      html: 'test',
      data: {
        url: `${process.env.MODE == 'dev' ? 'http://localhost:8080/admin/login?to=put-order&offer=' : 'https://tvsgroupinternational.com/admin/login?to=put-order&offer='}${url}`,
        credits: body.credits,
        price: body.price,
        discount,
        date: hoy.toDateString(),
        client: {
          name: user.fullName(),
          email: user.email,
          phone: user.phone,
          country: user.country,
        },
      },
    });
    return {
      statusCode: 200,
      error: '',
      message: response,
    };
  }
}
