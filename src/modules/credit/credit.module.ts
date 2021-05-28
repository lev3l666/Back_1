import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditEntity } from './credit.entity';
import { User } from '../user/user.entity';
import { UserNetworkEntity } from '../user-network/user-network.entity';
import { CreditMovementModule } from '../credit-movement/credit-movement.module';
import { CreditTransferEntity } from './credit.transfer.entity';
import { CreditOrderEntity } from '../credit-order/credit-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditEntity, User, UserNetworkEntity, CreditTransferEntity, CreditOrderEntity]), CreditMovementModule],
  providers: [CreditService],
  controllers: [CreditController],
  exports: [CreditModule],
})
export class CreditModule {
}
