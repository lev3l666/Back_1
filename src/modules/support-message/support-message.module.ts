import { Module } from '@nestjs/common';
import { SupportMessageController } from './support-message.controller';
import { SupportMessageService } from './support-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportTicketMessageEntity } from './support.ticket.message.entity';
import { SupportTicketEntity } from '../support/support.ticket.entity';
import { SocketModule } from '../socket/socket.module';
import { User } from '../user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupportTicketMessageEntity, SupportTicketEntity, User]),
    SocketModule,
  ],
  controllers: [SupportMessageController],
  providers: [SupportMessageService],
})
export class SupportMessageModule {
}
