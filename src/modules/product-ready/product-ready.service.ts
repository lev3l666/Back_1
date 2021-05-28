import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductReadyEntity } from './entities/product-ready.entity';

@Injectable()
export class ProductReadyService {
  constructor(
    @InjectRepository(ProductReadyEntity)
    private readonly productReadyEntityRepository: Repository<ProductReadyEntity>,
  ) {
  }

  async create(createProductReady) {
    return this.productReadyEntityRepository.save(createProductReady);
  }

  findAll() {
    return `This action returns all productReady`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productReady`;
  }

  update(id: number, updateProductReadyDto) {
    return `This action updates a #${id} productReady`;
  }

  remove(id: number) {
    return `This action removes a #${id} productReady`;
  }
}
