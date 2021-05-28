import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportTicketMessageEntity } from './support.ticket.message.entity';
import { IsNull, Not, Repository } from 'typeorm';
import { SocketService } from '../socket/socket.service';
import { SupportTicketEntity } from '../support/support.ticket.entity';
import { classToPlain } from 'class-transformer';

import { User } from '../user/user.entity';

@Injectable()
export class SupportMessageService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(SupportTicketMessageEntity)
    private readonly supportTicketMessageEntityRepository: Repository<SupportTicketMessageEntity>,
    @InjectRepository(SupportTicketEntity)
    private readonly supportTicketEntityRepository: Repository<SupportTicketEntity>,
    private readonly socketService: SocketService,
  ) {
  }

  async createMessage(authUser, supportId, body, file) {
    const support = await this.supportTicketEntityRepository.findOne(supportId);
    const model: Partial<SupportTicketMessageEntity> = {
      userId: authUser.id,
      text: body.text,
      supportTicketId: supportId,
    };
    if (file) {
      const fileFormat = {
        extraType: 'file',
        name: file.originalname,
        type: file.mimetype,
        key: file.key,
        s3url: file.location,
        size: file.size,
      };
      model.extraData = JSON.stringify([fileFormat]);
    }
    const { id } = await this.supportTicketMessageEntityRepository.save(model);
    const message = await this.supportTicketMessageEntityRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (support.staffUserId !== null) {
      const response = classToPlain(message);
      this.socketService.emitToAll(`newMsgChat:${support.id}`, response);
      let tempData: any = response;
      tempData.type = "newSupportMessage";
      tempData.orderId = support.orderId;
      tempData.model = support.orderModel;

      if (support.staffUserId != authUser.id)
      {
        this.socketService.emitToUser(support.staffUserId, 'notify', tempData);
      }
      else
      {
        this.socketService.emitToUser(support.clientUserId, 'notify', tempData);
      }

    }

    return message;
  }

  async getArrayFiles(id: any) {
    const fileList = [];
    const messages = await this.supportTicketMessageEntityRepository.find({
      where: { extraData: Not(IsNull()), supportTicketId: id },
    });
    messages.forEach(el => {
      fileList.push(...(JSON.parse(el.extraData as string)));
    });
    return fileList;
  }
}
