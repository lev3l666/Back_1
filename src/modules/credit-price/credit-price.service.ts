import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreditPriceEntity } from './credit-price.entity';
import { UserNetworkEntity } from '../user-network/user-network.entity';

@Injectable()
export class CreditPriceService {
  constructor(
    @InjectRepository(CreditPriceEntity)
    private readonly creditPriceEntityRepository: Repository<CreditPriceEntity>,
    @InjectRepository(UserNetworkEntity)
    private readonly userNetworkEntityRepository: Repository<UserNetworkEntity>,
  ) {
  }

  async findOwmerList(owner_id) {
    return await this.creditPriceEntityRepository.find({ ownerId: owner_id });
  }

  async saveList(owner_id: any, body) {
    await this.creditPriceEntityRepository.delete({ ownerId: owner_id });
    let models: Partial<CreditPriceEntity>[] = [];
    for (let price of body) {
      models.push({
        credit: price.credit,
        discount: price.discount,
        price: price.price,
        ownerId: owner_id,
        overrunPf: price.overrunPf,
      });
    }
    await this.creditPriceEntityRepository.save(models);
    return models;
  }

  async priceListToBuy(user: any) {
    let network = await this.userNetworkEntityRepository.findOne({
      where: [{ children: Like(`%${user.id},%`) }, { children: Like(`%,${user.id},%`) }, { children: Like(`%,${user.id}%`) }],
    });
    let owner_id = null;
    if (network){
      owner_id = network.userId
    }
    return this.creditPriceEntityRepository.find({ownerId: owner_id})
  }
}
