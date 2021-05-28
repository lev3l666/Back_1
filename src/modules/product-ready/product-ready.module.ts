import { Module } from '@nestjs/common';
import { ProductReadyService } from './product-ready.service';
import { ProductReadyController } from './product-ready.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductReadyEntity } from './entities/product-ready.entity';
import { S3Module } from '../s3/s3.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductReadyEntity]),
    S3Module,
  ],
  controllers: [ProductReadyController],
  providers: [ProductReadyService],
})
export class ProductReadyModule {
}
