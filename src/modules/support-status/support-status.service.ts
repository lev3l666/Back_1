import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportTicketStatusEntity } from './support.ticket.status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupportStatusService {
  constructor(
    @InjectRepository(SupportTicketStatusEntity)
    private readonly supportStatusRepository: Repository<SupportTicketStatusEntity>,
  ) {
  }

  async listAll() {
    return await this.supportStatusRepository.find();
  }
}
