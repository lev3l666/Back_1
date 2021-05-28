import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { ResponseInterface } from '../../dto-interface/interface';
import { OrderCustomSoftwareEntity } from './order-custom-software.entity';
import { User } from '../user/user.entity';
import { SocketService } from '../socket/socket.service';
import { AppHelper } from '../../utils/app-helper';
import { OrderCustomSoftwareHistoryEntity } from './order-custom-software-history.entity';
import { classToPlain } from 'class-transformer';

const moment = require('moment');

@Injectable()
export class OrderCustomSoftwareService {
  constructor(
    @InjectRepository(OrderCustomSoftwareEntity)
    private readonly customSoftwareRepository: Repository<OrderCustomSoftwareEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(OrderCustomSoftwareHistoryEntity)
    private readonly historyEntityRepository: Repository<OrderCustomSoftwareHistoryEntity>,
    private readonly socketService: SocketService,
  ) {
  }

  async list(query) {
    const where = AppHelper.filterObjectAndRemoveEmptyValues({
      name: query.name,
      status: query.status,
      calibrator_id: query.calibrator_id,
      number_order: query.number_order,
    });

    let sql = '';
    const arr = [];
    Object.keys(where).forEach(el => {
      if (el === 'calibrator_id' && where[el] === '0') {
        arr.push(`${OrderCustomSoftwareEntity.name}.${el} IS NULL`);
      } else if (el === 'name') {
        arr.push(`OrderCustomSoftwareEntity__client.name like \'%${where[el]}%\'`);
      } else {
        arr.push(`${OrderCustomSoftwareEntity.name}.${el} = ${typeof where[el] === 'string' ? '\'' + where[el] + '\'' : where[el]}`);
      }
    });
    if (arr.length) {
      sql += `(${arr.join(' AND ')})`;
    }

    const orders = await this.customSoftwareRepository.find({
      where: sql,
      order: {
        id: 'DESC',
      },
      relations: ['client', 'calibrator'],
    });

    const countPending = await this.customSoftwareRepository.count({
      where: { status: 'New', calibratorId: IsNull() },
    });
    return { orders, countPending , total: orders.length};
  }

  async index(id) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user != null) {
      let orders = [];
      if (user.type.includes('administrator')) {
        orders = await this.customSoftwareRepository.find({
          order: {
            id: 'DESC',
          },
          relations: ['client', 'calibrator', 'histories'],
        });
      } else if (user.type.includes('calibrator')) {
        orders = await this.customSoftwareRepository.find({
          where: { calibratorId: id },
          order: {
            id: 'DESC',
          },
          relations: ['client', 'calibrator', 'histories'],
        });
      } else {
        orders = await this.customSoftwareRepository.find({
          where: { userId: id },
          order: {
            id: 'DESC',
          },
          relations: ['client', 'calibrator', 'histories'],
        });
      }
      return {
        statusCode: 200,
        error: null,
        message: {
          orders: classToPlain(orders),
        },
      };
    }

  }

  async newOrders(body): Promise<ResponseInterface> {

    const users = (await this.userRepository.find({
        where: [{
          type: '["administrator"]',
          status: 1,
        }, { type: '["calibrator"]', status: 1 }],
      })
    ).map((e) => e.id);
    let count = [];

    if (users.includes(Number(body.id))) {
      count = await this.customSoftwareRepository.find({
        where: { status: 'New' },
      });
    } else {
      count = await this.customSoftwareRepository.find({
        where: [{ status: 'New', userId: body.id }],
      });
    }
    return {
      statusCode: 200,
      error: null,
      message: count.length,
    };
  }

  async updateStatus(body): Promise<ResponseInterface> {
    await this.customSoftwareRepository.update({ id: body.id }, { status: body.status });

    const response = await this.customSoftwareRepository.findOne({ id: body.id });
    response.type = 'StatusChanged';
    this.socketService.emitToUser(response.userId, 'notify', JSON.stringify(response));

    return {
      statusCode: 200,
      error: null,
      message: null,
    };
  }

  async addHistory(orderId, body, files, userId) {
    const filesSave: any[] = files.map(file => {
      return {
        name: file.originalname,
        type: file.mimetype,
        key: file.key,
        s3url: file.location,
        size: file.size,
      };
    });

    const getOrder = await this.customSoftwareRepository.findOne({ id: orderId });
    const response = {
      id: orderId,
      type: 'Response',
      text: body.message,
      numberOrder: orderId,
      time: new Date(),
      owner: getOrder.userId,
    };

    this.socketService.emitToUser(response.owner, 'notify', JSON.stringify(response));

    return await this.historyEntityRepository.insert({
      message: body.message,
      extraData: JSON.stringify(filesSave),
      orderId,
      userId,
    });
  }

  async assign(body): Promise<ResponseInterface> {
    await this.customSoftwareRepository.update({ id: body.id }, { calibratorId: body.calibratorId });
    const tempData = { id: '', type: '', time: '' };
    tempData.id = `${JSON.stringify(body.id)}`;
    tempData.type = 'AssignedOrder';
    tempData.time = moment(new Date());

    this.socketService.emitToUser(Number(body.calibratorId), 'notify', tempData);

    return {
      statusCode: 200,
      error: null,
      message: null,
    };
  }

  async findById(id) {
    const result = await this.customSoftwareRepository.findOne({
      relations: ['client', 'calibrator', 'histories', 'histories.user'],
      where: { id },
    });
    result.histories = result.histories.filter(el => el.deletedAt === null);
    return result;
  }

  async removeFileInHistory(body) {
    const message = await this.historyEntityRepository.findOne({ where: { id: body.ms_id } });
    const extraData = message.extraData;
    if (typeof extraData !== 'string') {
      const i = extraData.findIndex(el => el.key === body.key);
      const file = extraData[i];
      AppHelper.removePublicAclS3(file.key);
      extraData.splice(i, 1);
      return await this.historyEntityRepository.update({ id: message.id }, { extraData: JSON.stringify(extraData) });
    }
    return false;
  }

  async removeHistory(body) {
    const message = await this.historyEntityRepository.findOne({ where: { id: body.ms_id } });
    if (typeof message.extraData !== 'string') {
      message.extraData.forEach(value => {
        AppHelper.removePublicAclS3(value.key);
      });
    }
    return await this.historyEntityRepository.softDelete({ id: message.id });
  }
}
