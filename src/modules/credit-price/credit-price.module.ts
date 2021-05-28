import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditPriceEntity } from './credit-price.entity';
import { CreditPriceService } from './credit-price.service';
import { CreditPriceController } from './credit-price.controller';
import { UserNetworkEntity } from '../user-network/user-network.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditPriceEntity, UserNetworkEntity])],
  providers: [CreditPriceService],
  controllers: [CreditPriceController],
  exports: [CreditPriceModule],
})
export class CreditPriceModule {
}
