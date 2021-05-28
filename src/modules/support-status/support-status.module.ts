import { Module } from '@nestjs/common';
import { SupportStatusController } from './support-status.controller';
import { SupportStatusService } from './support-status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportTicketStatusEntity } from './support.ticket.status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupportTicketStatusEntity]),
  ],
  controllers: [SupportStatusController],
  providers: [SupportStatusService],
})
export class SupportStatusModule {
}
