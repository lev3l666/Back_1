import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderSoftwareHistoryEntity } from '../order-software/order-software-history.entity';
import { SocketModule } from '../socket/socket.module';
import { EncryptPendingEntity } from './encrypt.pending.entity';
import { S3Module } from '../s3/s3.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderSoftwareHistoryEntity, EncryptPendingEntity]),
    SocketModule,
    S3Module,
  ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {
}
