import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportTicketCategoryEntity } from './support.ticket.category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupportCategoryService {
  constructor(
    @InjectRepository(SupportTicketCategoryEntity)
    private readonly supportCategoryRepository: Repository<SupportTicketCategoryEntity>,
  ) {
  }

  async listAll() {
    return await this.supportCategoryRepository.find();
  }
}
