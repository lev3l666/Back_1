import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocketModule } from '../socket/socket.module';
import { VehiclesOptionsTwoController } from './vehicles-options-two.controller';
import { VehiclesOptionsTwoEntity } from './vehicles-options-two.entity';
import { VehiclesOptionsTwoService } from './vehicles-options-two.service';
import { User } from '../user/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([VehiclesOptionsTwoEntity, User]), SocketModule,],
  controllers: [VehiclesOptionsTwoController],
  providers: [VehiclesOptionsTwoService],
})
export class VehiclesOptionsTwoModule {
}
