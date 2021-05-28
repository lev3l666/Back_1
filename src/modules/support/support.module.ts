import { Module } from '@nestjs/common';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportTicketEntity } from './support.ticket.entity';
import { SupportTicketMessageEntity } from '../support-message/support.ticket.message.entity';
import { SocketModule } from '../socket/socket.module';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';
import { User } from '../user/user.entity';
import { SupportTicketStatusEntity } from '../support-status/support.ticket.status.entity';
import { OrderSoftwareEntity } from '../order-software/order-software.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupportTicketEntity, SupportTicketMessageEntity, OrderCustomSoftwareEntity, SupportTicketStatusEntity, User, OrderSoftwareEntity]),
    SocketModule,
  ],
  controllers: [SupportController],
  providers: [SupportService],
})
export class SupportModule {
}
