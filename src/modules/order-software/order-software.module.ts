import { Module } from '@nestjs/common';
import { OrderSoftwareService } from './order-software.service';
import { OrderSoftwareController } from './order-software.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderSoftwareEntity } from './order-software.entity';
import { User } from '../user/user.entity';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';
import { OrderSoftwareHistoryEntity } from './order-software-history.entity';
import { SocketModule } from '../socket/socket.module';
import { SubscriptionModule } from '../subscription/subscription.module';
import { S3Module } from '../s3/s3.module';
import { EncryptPendingEntity } from '../files/encrypt.pending.entity';
import { CreditMovementModule } from '../credit-movement/credit-movement.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderSoftwareEntity, User, OrderCustomSoftwareEntity, OrderSoftwareHistoryEntity, EncryptPendingEntity]),
    SocketModule,
    SubscriptionModule,
    S3Module,
    CreditMovementModule
  ],
  providers: [OrderSoftwareService],
  controllers: [OrderSoftwareController],
})
export class OrderSoftwareModule {
}
