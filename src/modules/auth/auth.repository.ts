import { User } from '../user/user.entity';
import { EntityRepository, getConnection, Repository } from 'typeorm';
import { genSalt, hash } from 'bcryptjs';
import { UserVerificationEntity } from '../user-verification/user-verification.entity';
import { generateRandomInteger, generateRandomString } from '../../services/helpers/utilities';
import { ResponseInterface } from '../../dto-interface/interface';
import { SignupDto } from '../../dto-interface/dto';
import { UserNetworkEntity } from '../user-network/user-network.entity';
import { sendEmail } from '../../services';
import { CreditEntity } from '../credit/credit.entity';

@EntityRepository(User)
export class AuthRepository extends Repository <User> {
  async signup(signupDto: SignupDto): Promise<ResponseInterface> {
    const { name, lastName, email, password, phone, country, dealerId } = signupDto;
    const user = new User();
    user.name = name.toUpperCase();
    user.lastName = lastName.toUpperCase();
    user.email = email;
    user.phone = phone;
    user.country = country.toUpperCase();
    user.status = 0;
    user.twoFactor = 0;
    user.type = (dealerId != null && dealerId !== '') ? JSON.stringify(['subdealer']) : JSON.stringify(['dealer']);
    const salt = await genSalt(12);
    user.password = await hash(password, salt);
    // @ts-ignore
    await User.save(user);
    this.createParents(user.id, dealerId);
    if (dealerId != null && dealerId !== '') {
      await this.updateParent(dealerId, user.id);
    }
    const codeEmail = await this.createUserVerification(user.id, user.email);
    await sendEmail({
      data: { name: user.name + user.lastName, hash: codeEmail, id: user.id },
      to: user.email,
      subject: 'VERIFICATION EMAIL - TVS GROUP INTERNATIONAL',
      html: 'verify',
    });
    this.createCredits(user.id);
    return {
      statusCode: 200,
      error: null,
      message: 'process success',
    };
  }

  createUserVerification(userId, email) {
    return new Promise(resolve => {
      const codeEmail = generateRandomInteger(10);
      const codePhone = generateRandomInteger(6);
      const codeTwoFactor = generateRandomInteger(6);
      const codePassword = generateRandomString(50);
      const today = new Date().getTime();
      getConnection()
        .createQueryBuilder()
        .insert()
        .into(UserVerificationEntity)
        .values([
          {
            userId,
            email: JSON.stringify({ code: codeEmail, status: 0, date: today }),
            phone: JSON.stringify({ code: codePhone, status: 0, date: today }),
            twoFactor: JSON.stringify({ code: codeTwoFactor, status: 0 }),
            password: codePassword,
          },
        ])
        .execute();
      resolve(codeEmail);
    });
  }

  createCredits(userId) {
    getConnection()
      .createQueryBuilder()
      .insert()
      .into(CreditEntity)
      .values([
        {
          userId,
        },
      ])
      .execute();
  }

  createParents(userId, parentId) {
    getConnection()
      .createQueryBuilder()
      .insert()
      .into(UserNetworkEntity)
      .values([
        {
          userId,
          parent: (parentId != null && parentId !== '') ? parentId : '',
        },
      ])
      .execute();
  }

  async updateParent(parentId, childrenId) {
    const query = 'select * from user_network where user_id = ' + parentId;
    const parent = await getConnection().query(query);
    const arrayChildren = [];
    if (parent[0].children != null) {
      parent[0].children = JSON.parse(parent[0].children);
      parent[0].children.forEach(item => {
        arrayChildren.push(item);
      });
    }
    arrayChildren.push(childrenId);
    const queryParent = 'update user_network set children = "' + JSON.stringify(arrayChildren) + '" where user_id = ' + parentId;
    await getConnection().query(queryParent);
  }

}
