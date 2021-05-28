import { Module } from '@nestjs/common';
import { VehiclesFileService } from './vehicles-file.service';
import { VehiclesFileController } from './vehicles-file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesFileEntity } from './vehicles-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehiclesFileEntity])],
  providers: [VehiclesFileService],
  controllers: [VehiclesFileController],
  exports: [VehiclesFileModule],
})
export class VehiclesFileModule {
}
