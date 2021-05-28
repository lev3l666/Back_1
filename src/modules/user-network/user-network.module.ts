import { Module } from '@nestjs/common';
import { UserNetworkService } from './user-network.service';
import { UserNetworkController } from './user-network.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserNetworkEntity } from './user-network.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserNetworkEntity])],
  providers: [UserNetworkService],
  controllers: [UserNetworkController],
  exports: [UserNetworkModule],
})
export class UserNetworkModule {
}
