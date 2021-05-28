import { DsgOptionsTwoService } from './dsg-options-two.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DsgOptionsTwoController } from './dsg-options-two.controller';
import { DsgOptionsTwoEntity } from './dsg-options-two.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DsgOptionsTwoEntity])],
  controllers: [DsgOptionsTwoController],
  providers: [DsgOptionsTwoService],
})
export class DsgOptionsTwoModule {
}
