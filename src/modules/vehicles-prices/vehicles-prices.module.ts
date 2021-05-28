import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesPricesController } from './vehicles-prices.controller';
import { VehiclesPricesEntity } from './vehicles-prices.entity';
import { VehiclesPricesService } from './vehicles-prices.service';

@Module({
  imports: [TypeOrmModule.forFeature([VehiclesPricesEntity])],
  providers: [VehiclesPricesService],
  controllers: [VehiclesPricesController],
})
export class VehiclesPricesModule {
}
