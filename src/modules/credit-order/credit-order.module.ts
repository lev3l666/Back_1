import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditOrderService } from './credit-order.service';
import { CreditOrderEntity } from './credit-order.entity';
import { CreditOrderController } from './credit-order.controller';
import { CreditPriceEntity } from '../credit-price/credit-price.entity';
import { User } from '../user/user.entity';
import { CreditMovementEntity } from '../credit-movement/credit-movement.entity';
import { CreditMovementModule } from '../credit-movement/credit-movement.module';
import { CompanyEntity } from '../company/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CreditOrderEntity, CreditPriceEntity, CreditMovementEntity, User, CompanyEntity]),
    CreditMovementModule,
  ],
  providers: [CreditOrderService],
  controllers: [CreditOrderController],
  exports: [CreditOrderModule],
})
export class CreditOrderModule {
}
