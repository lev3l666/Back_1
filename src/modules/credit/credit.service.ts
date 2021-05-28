import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditEntity } from './credit.entity';
import { In, Like, Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { ResponseInterface } from '../../dto-interface/interface';
import { decrypt } from '../../services';
import { UserNetworkEntity } from '../user-network/user-network.entity';
import { CreditMovementService } from '../credit-movement/credit-movement.service';
import { CreditOrderEntity } from '../credit-order/credit-order.entity';
import { CreditTransferEntity } from './credit.transfer.entity';
import { classToPlain } from 'class-transformer';
import { UserReq } from '../../dto-interface/interface/UserReq';

@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(CreditEntity)
    private readonly creditRepository: Repository<CreditEntity>,
    @InjectRepository(UserNetworkEntity)
    private readonly userNetworkRepository: Repository<UserNetworkEntity>,
    @InjectRepository(CreditOrderEntity)
    private readonly creditOrderRepository: Repository<CreditOrderEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CreditTransferEntity)
    private readonly creditTransferEntityRepository: Repository<CreditTransferEntity>,
    private readonly creditMovementService: CreditMovementService,
  ) {
  }

  async index(body): Promise<ResponseInterface> {
    const rol = await decrypt(body.rol);
    const id = await decrypt(body.id);
    let data: any[] = [];
    if (rol.toString() === 'administrator') {
      data = await this.userRepository.find({
        where: [
          { type: Like(`%distributor%`) },
          { type: Like(`%dealer%`) },
          { type: Like(`%subdealer%`) },
          { type: Like(`%workshops%`) },
        ],
      });
    }
    if (rol.toString() === 'distributor' || rol === 'Dealer') {
      const network: any = await this.userNetworkRepository.findOne({
        where: { userId: id },
      });
      data = await this.userRepository.find({
        where: { id: In(JSON.parse(network.children)) },
      });
    }
    for (const item of data) {
      item.balance = Number(
        await this.creditMovementService.getUserBalance(item.id),
      );
    }
    return {
      statusCode: 200,
      error: null,
      message: classToPlain(data, { groups: ['user'] }),
    };
  }

  async transfer(body, user) {
    const userIdTo = await decrypt(body.userIdTo);
    const amount = await decrypt(body.amount);
    const userto = await this.userRepository.findOne(userIdTo);
    const userFrom = await this.userRepository.findOne(user.id);

    if (user.role.includes('administrator')) {
      let transfer: Partial<CreditTransferEntity> = {
        userFromId: userFrom.id,
        userToId: userto.id,
        amountCredits: amount,
        factor: 0,
        euro: 0,
      };
      await this.creditTransferEntityRepository.save(transfer);
      this.creditMovementService.putFreeCredits(userto.id, {
        description: body.description,
        amount: amount,
        factor: 0,
        euro: 0,
        model: CreditTransferEntity.name,
        modelId: transfer.id,
      });
    } else {
      const userFromBalance = await this.creditMovementService.getUserBalance(
        user.id,
      );
      if (userFromBalance >= Number(amount)) {
        let factor = await this.creditMovementService.getFactor(user.id);
        let transfer: Partial<CreditTransferEntity> = {
          userFromId: userFrom.id,
          userToId: userto.id,
          amountCredits: amount,
          factor: factor,
          euro: amount * factor,
        };
        await this.creditTransferEntityRepository.save(transfer);
        await this.creditMovementService.putDeductedMovenment(user.id, {
          description: `${body.description} (Transfer to ${userto.fullName()})`,
          amount: amount,
        });
        await this.creditMovementService.putCredits(userto.id, {
          description: `${
            body.description
          } (Transfer from ${userFrom.fullName()})`,
          amount: amount,
          factor: transfer.factor,
          euro: transfer.euro,
          model: CreditTransferEntity.name,
          modelId: transfer.id,
        });
      } else {
        throw new HttpException('no_credits_founds', HttpStatus.NOT_ACCEPTABLE);
      }
    }

    const balance = await this.creditMovementService.getUserBalance(userIdTo);
    const history = await this.creditMovementService.findListByUser(userIdTo);
    return {
      statusCode: 200,
      error: null,
      message: { balance, history },
    };
  }

  async deduced(body) {
    const userIdTo = await decrypt(body.userIdTo);
    const amount = await decrypt(body.amount);
    const is = await this.creditMovementService.putDeductedMovenment(userIdTo, {
      description: body.description,
      amount,
    });
    if (is) {
      const balance = await this.creditMovementService.getUserBalance(userIdTo);
      const history = await this.creditMovementService.findListByUser(userIdTo);
      return {
        statusCode: 200,
        error: null,
        message: { balance, history },
      };
    } else {
      return {
        statusCode: HttpStatus.NOT_ACCEPTABLE,
        message: 'no_credit_funds',
        error: 'no_credit_funds',
      };
    }
  }

  async history(id) {
    const balance = await this.creditRepository.findOne({
      where: { userId: id },
    });
    // const history = await this.creditHistoryRepository.find({ where: { userId: id } });
    const history = await this.creditOrderRepository.find({ where: { userId: id } });
    return {
      statusCode: 200,
      error: null,
      message: { balance, history },
    };
  }

  async countSubAcounts(user: UserReq) {
    const network: any = await this.userNetworkRepository.findOne({
      where: { userId: user.id },
    });
    console.log(network);
    if (network && network.children !== null) {
      return await this.userRepository.count({
        where: { id: In(JSON.parse(network.children)) },
      });
    }
    return 0;
  }
}
