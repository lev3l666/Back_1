import { Module } from '@nestjs/common';
import { VehiclesOptionsService } from './vehicles-options.service';
import { VehiclesOptionsController } from './vehicles-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { VehiclesOptionsEntity } from './vehicles-options.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehiclesOptionsEntity]),
    MulterModule.register({
      dest: './files',
    }),
  ],
  providers: [VehiclesOptionsService],
  controllers: [VehiclesOptionsController],
})
export class VehiclesOptionsModule {
}
