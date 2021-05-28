import { Module } from '@nestjs/common';
import { UserVerificationService } from './user-verification.service';
import { UserVerificationController } from './user-verification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserVerificationEntity } from './user-verification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserVerificationEntity])],
  providers: [UserVerificationService],
  controllers: [UserVerificationController],
})
export class UserVerificationModule {
}
