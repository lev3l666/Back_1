import { SiteService } from './site.service';
import { Module } from '@nestjs/common';
import { SiteController } from './site.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesEntity } from '../vehicles/vehicles.entity';
import { VehiclesDSGCombosEntity } from '../vehicles-dsg/vehicles-dsg-combos.entity';
import { ComboPricesEntity } from '../combo_prices/combo_prices.entity';
import { User } from '../user/user.entity';
import { SocketModule } from '../socket/socket.module';
import { OrderCustomSoftwareHistoryEntity } from '../order-custom-software/order-custom-software-history.entity';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';
import { OrderSoftwareEntity } from '../order-software/order-software.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehiclesEntity, VehiclesDSGCombosEntity, ComboPricesEntity, OrderSoftwareEntity, OrderCustomSoftwareEntity, OrderCustomSoftwareHistoryEntity, User]),
    SocketModule,
  ],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {
}
