import { DsgOptionsService } from './dsg-options.service';
import { Module } from '@nestjs/common';
import { DsgOptionsEntity } from './dsg-options.entity';
import { DsgOptionsController } from './dsg-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DsgOptionsEntity])],
  controllers: [DsgOptionsController],
  providers: [DsgOptionsService],
})
export class DsgOptionsModule {
}
