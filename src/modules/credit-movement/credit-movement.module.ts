import { Module } from '@nestjs/common';
import { CreditMovementService } from './credit-movement.service';
import { CreditMovementController } from './credit-movement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditMovementEntity } from './credit-movement.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditMovementEntity, User])],
  controllers: [CreditMovementController],
  providers: [CreditMovementService],
  exports: [CreditMovementService],
})
export class CreditMovementModule {
}
