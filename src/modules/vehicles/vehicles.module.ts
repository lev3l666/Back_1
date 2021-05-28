import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { VehiclesEntity } from './vehicles.entity';
import { VehiclesDSGCombosEntity } from '../vehicles-dsg/vehicles-dsg-combos.entity';
import { VehiclesDsgService } from '../vehicles-dsg/vehicles-dsg.service';
import { VehiclesPricesService } from '../vehicles-prices/vehicles-prices.service';
import { VehiclesOptionsService } from '../vehicles-options/vehicles-options.service';
import { Combo_pricesService } from '../combo_prices/combo_prices.service';
import { VehiclesPricesEntity } from '../vehicles-prices/vehicles-prices.entity';
import { VehiclesOptionsEntity } from '../vehicles-options/vehicles-options.entity';
import { VehiclesFileEntity } from '../vehicles-file/vehicles-file.entity';
import { ComboPricesEntity } from '../combo_prices/combo_prices.entity';
import { VehiclesOptionsTwoEntity } from '../vehicles-options-two/vehicles-options-two.entity';
import { VehiclesOptionsTwoService } from '../vehicles-options-two/vehicles-options-two.service';
import { DsgOptionsEntity } from '../vehicles-dsg-options/dsg-options.entity';
import { DsgOptionsService } from '../vehicles-dsg-options/dsg-options.service';
import { DsgOptionsTwoEntity } from '../vehicles-dsg-options-two/dsg-options-two.entity';
import { DsgOptionsTwoService } from '../vehicles-dsg-options-two/dsg-options-two.service';
import { User } from '../user/user.entity';
import { SocketModule } from '../socket/socket.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehiclesEntity, VehiclesDSGCombosEntity, VehiclesPricesEntity, VehiclesOptionsEntity,
      VehiclesFileEntity, ComboPricesEntity, VehiclesOptionsTwoEntity, DsgOptionsEntity, DsgOptionsTwoEntity, User]), SocketModule,
    MulterModule.register({
      dest: './files',
    }),
  ],
  providers: [VehiclesService, VehiclesDsgService, VehiclesPricesService, VehiclesOptionsService, Combo_pricesService,
    VehiclesOptionsTwoService, DsgOptionsService, DsgOptionsTwoService],
  controllers: [VehiclesController],
  exports: [VehiclesModule],
})
export class VehiclesModule {
}
