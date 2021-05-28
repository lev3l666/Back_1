import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { compare, genSalt, hash } from 'bcryptjs';
import { ResponseInterface } from '../../dto-interface/interface';
import { UserVerificationEntity } from '../user-verification/user-verification.entity';
import { Repository } from 'typeorm';
import { generateRandomInteger } from '../../services/helpers/utilities';
import { sendEmail } from '../../services';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    @InjectRepository(UserVerificationEntity)
    private readonly userVerificationRepository: Repository<UserVerificationEntity>,
  ) {
  }

  async get(id: number): Promise<ResponseInterface> {
    if (!id) {
      return { statusCode: 400, error: 'No found data', message: null };
    }
    const user: User = await this.userRepository.findOne({
      where: { id, status: 1 },
    });
    if (!user) {
      return { statusCode: 400, error: 'No found data', message: null };
    }
    delete user.password;
    return { statusCode: 200, error: null, message: { ...user } };
  }

  async detail(id: number): Promise<ResponseInterface> {
    if (!id) {
      return { statusCode: 400, error: 'No found data', message: null };
    }
    const user: User = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      return { statusCode: 400, error: 'No found data', message: null };
    }
    delete user.password;
    return { statusCode: 200, error: null, message: { ...user } };
  }

  async index(): Promise<ResponseInterface> {
    let data = await this.userRepository.find({
      order: {
        id: 'DESC',
      },
    });
    data = data.map(item => {
      // @ts-ignore
      item.status = (item.status === 1) ? 'Active' : 'Inactive';
      delete item.password;
      // @ts-ignore
      item.role = item.type;
      item.name = item.name + ' ' + item.lastName;
      return item;
    });
    return { statusCode: 200, error: null, message: data };
  }

  async create(user: User): Promise<ResponseInterface> {
    return { statusCode: 200, error: null, message: await this.userRepository.save(user) };
  }

  async update(id: number, user): Promise<ResponseInterface> {
    const currentUser: User = await this.userRepository.findOne({ where: { id } });
    if (currentUser.email != user.email) {
      const code = await generateRandomInteger(20);
      const obj = JSON.stringify({
        code,
        status: 0,
        date: new Date().getTime(),
      });
      this.userVerificationRepository.update({ userId: id }, { email: obj });
      sendEmail({
        data: { name: user.name + user.lastName, hash: code, id: user.id },
        to: user.email,
        subject: 'VERIFICATION EMAIL',
        html: 'verify',
      });
    }
    const data = await this.userRepository.update(id, user);
    if (data) {
      return { statusCode: 200, error: null, message: data };
    } else {
      return { statusCode: 400, error: null, message: data };
    }
  }

  async updateRol(id: number, body): Promise<ResponseInterface> {
    if (body) {
      body.role = JSON.stringify(body.role);
    }
    const data = await this.userRepository.update(id, { type: body.role });
    if (data) {
      return { statusCode: 200, error: null, message: data };
    } else {
      return { statusCode: 400, error: null, message: data };
    }
  }

  async updateStatus(id: number): Promise<ResponseInterface> {
    const user = await this.userRepository.findOne(id);
    let status = 1;
    if (user.status === 1) {
      status = 0;
    }
    const data = await this.userRepository.update(id, { status });
    if (data) {
      return { statusCode: 200, error: null, message: data };
    } else {
      return { statusCode: 400, error: null, message: data };
    }
  }

  async updatePassword(id: number, body): Promise<ResponseInterface> {
    const salt = await genSalt(12);
    const pass = await hash(body.password, salt);
    const data = await this.userRepository.update(id, { password: pass });
    if (data) {
      return { statusCode: 200, error: null, message: data };
    } else {
      return { statusCode: 400, error: null, message: data };
    }
  }

  async delete(id: number): Promise<ResponseInterface> {
    const userExist = await this.userRepository.findOne(id);
    if (!userExist) {
      return { statusCode: 400, error: 'No found data', message: null };
    } else {
      await this.userRepository.update(id, { status: 0 });
      return { statusCode: 200, error: null, message: 'process success' };
    }
  }

  async getUserByRole(type: any[] | string) {
    const where = Array.isArray(type) ? type : [type];
    const sql = where.map(el => `type like '%${el}%'`).join(' OR ');
    return this.userRepository.createQueryBuilder('user')
      .where(sql)
      .getMany();
  }

  async validatePassword(password: any, userId) {
    const user = await this.userRepository.findOne(userId);
    return await compare(password, user.password);
  }
}
