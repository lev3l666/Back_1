import { Combo_pricesService } from './combo_prices.service';
import { Combo_pricesController } from './combo_prices.controller';
import { ComboPricesEntity } from './combo_prices.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComboPricesEntity])],
  controllers: [Combo_pricesController],
  providers: [Combo_pricesService],
})
export class Combo_pricesModule {
}
