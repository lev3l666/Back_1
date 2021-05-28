import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesDsgService } from './vehicles-dsg.service';
import { VehiclesDsgController } from './vehicles-dsg.controller';
import { VehiclesDSGCombosEntity } from './vehicles-dsg-combos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehiclesDSGCombosEntity]),
  ],
  providers: [VehiclesDsgService],
  controllers: [VehiclesDsgController],
})
export class VehiclesDsgModule {
}
