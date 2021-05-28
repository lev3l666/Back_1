import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderSoftwareHistoryEntity } from '../order-software/order-software-history.entity';
import { Repository } from 'typeorm';
import { SocketService } from '../socket/socket.service';
import { EncryptPendingEntity } from './encrypt.pending.entity';
import { S3Service } from '../s3/s3.service';

@Injectable()
export class FilesService {
  constructor(@InjectRepository(OrderSoftwareHistoryEntity)
              private readonly historyEntityRepository: Repository<OrderSoftwareHistoryEntity>,
              @InjectRepository(EncryptPendingEntity)
              private readonly encryptPendingEntityRepository: Repository<EncryptPendingEntity>,
              private readonly socketService: SocketService,
              private readonly s3Service: S3Service) {

  }

  async assignFileUrls(files, orderHistoryId, orderId, pendingId) {
    let encryptPending = await this.encryptPendingEntityRepository.findOne(pendingId);
    this.encryptPendingEntityRepository.update({ id: pendingId }, { isProcess: true });
    let orderHistory = await this.historyEntityRepository.findOne(orderHistoryId, {relations: ['order']});
    let extraData: any[] = orderHistory.extraData as any[];
    files.forEach(file => {
      let uuid = file.originalname.replace('.mod', '');
      let index = extraData.findIndex(el => el.uuid == uuid);
      extraData[index].name += '.mod';
      extraData[index].s3url = file.location;
    });
    this.historyEntityRepository.update({ id: orderHistory.id }, { extraData: JSON.stringify(extraData) });

    const response = {
      id: orderId,
      type: 'Response',
      text: orderHistory.message,
      numberOrder: orderHistory.order.orderId,
      time: new Date(),
      owner: orderHistory.order.dealerId,
    };

    this.socketService.emitToUser(response.owner, 'notify', JSON.stringify(response));
    this.socketService.emitToAll(`updateOrderDetail:${orderId}`);
  }

  async getPendingEncrypt() {
    let results = await this.encryptPendingEntityRepository.find({ where: { isProcess: false } });
    return results.map(el => {
      let links = JSON.parse(el.originalLinks);
      links = links.map(link => {
        return { uuid: link.uuid, downloadUrl: this.s3Service.getSignedUrl(link.key) };
      });
      return {
        encrypt_pending_id: el.id,
        url: el.urlToResp,
        files: links,
        vin: el.vin,
      };
    });
  }
}
