import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { UserVerificationEntity } from '../user-verification/user-verification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserVerificationEntity]), AuthModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserModule],
})
export class UserModule {

}
