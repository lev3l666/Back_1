import { Module } from '@nestjs/common';
import { OrderCustomSoftwareService } from './order-custom-software.service';
import { OrderCustomSoftwareController } from './order-custom-software.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderCustomSoftwareEntity } from './order-custom-software.entity';
import { User } from '../user/user.entity';
import { SocketModule } from '../socket/socket.module';
import { OrderCustomSoftwareHistoryEntity } from './order-custom-software-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderCustomSoftwareEntity, OrderCustomSoftwareHistoryEntity, User]),
    SocketModule,
  ],
  providers: [OrderCustomSoftwareService],
  controllers: [OrderCustomSoftwareController],
})
export class OrderCustomSoftwareModule {
}
