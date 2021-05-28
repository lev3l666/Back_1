import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { ConnectionController } from './connection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionEntity } from './connection.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConnectionEntity, User])],
  providers: [ConnectionService],
  controllers: [ConnectionController],
  exports: [ConnectionModule],
})
export class ConnectionModule {
}
