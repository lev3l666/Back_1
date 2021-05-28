import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditMovementEntity } from './credit-movement.entity';
import { Repository } from 'typeorm';
import { Pagination } from '../../dto-interface/interface/pagination';
import { classToPlain } from 'class-transformer';
import { AppHelper } from '../../utils/app-helper';

@Injectable()
export class CreditMovementService {
  constructor(
    @InjectRepository(CreditMovementEntity)
    private readonly creditMovementEntityRepository: Repository<CreditMovementEntity>,
  ) {
  }

  async getUserBalance(userId) {
    return (
      await this.creditMovementEntityRepository
        .createQueryBuilder()
        .select('sum(amount)', 'credits')
        .where({ userId: userId })
        .getRawOne()
    ).credits;
  }

  async getUserBalanceEuro(userId) {
    return (
      await this.creditMovementEntityRepository
        .createQueryBuilder()
        .select('sum(euro)', 'euro')
        .where({ userId: userId })
        .getRawOne()
    ).euro;
  }

  async getFactor(userId) {
    return (
      await this.creditMovementEntityRepository
        .createQueryBuilder()
        .select('sum(euro) / sum(amount)', 'factor')
        .where({ userId: userId })
        .getRawOne()
    ).factor;
  }

  async findListByUser(userId, pagination: { page: number, limit: number } = { page: 1, limit: 50 }) {
    let count = await this.creditMovementEntityRepository.count({ userId });
    let data = await this.creditMovementEntityRepository.find({
      where: { userId: userId },
      order: { id: 'DESC' },
      skip: pagination.limit * (pagination.page - 1),
      take: pagination.limit,
    });
    return {
      count, data,
    };
  }

  async putDeductedMovenment(userId, data: Partial<CreditMovementEntity>) {
    let balance = await this.getUserBalance(userId);
    if (balance >= data.amount) {
      data.userId = userId;
      data.amount = data.amount * -1;
      data.factor = await this.getFactor(userId);
      data.euro = data.amount * data.factor;
      await this.creditMovementEntityRepository.save(data);
      return true;
    } else {
      return false;
    }
  }

  async putCredits(userId, data: Partial<CreditMovementEntity>) {
    data.userId = userId;
    await this.creditMovementEntityRepository.save(data);
  }

  async putFreeCredits(userId, data: Partial<CreditMovementEntity>) {
    data.userId = userId;
    await this.creditMovementEntityRepository.save(data);
    return data;
  }

  async list(body: Partial<CreditMovementEntity>, pagination: Pagination) {
    let where = AppHelper.filterObjectAndRemoveEmptyValues({ userId: body.userId });
    let count = await this.creditMovementEntityRepository.count({where});
    let data: any[] = (await this.creditMovementEntityRepository.find({
      order: { id: 'DESC' },
      skip: pagination.limit * (pagination.page - 1),
      take: pagination.limit,
      relations: ['user'],
      where,
    }));
    return {
      count, data: classToPlain(data),
    };
  }
}
