import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Like, Repository } from 'typeorm';
import { ResponseInterface } from '../../dto-interface/interface';
import { OrderSoftwareEntity } from './order-software.entity';
import { User } from '../user/user.entity';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';
import { classToPlain } from 'class-transformer';
import { getVinInfo } from '../../services/vin/vin';
import { AppHelper } from '../../utils/app-helper';
import { OrderSoftwareHistoryEntity } from './order-software-history.entity';
import { SocketService } from '../socket/socket.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { S3Service } from '../s3/s3.service';
import { EncryptPendingEntity } from '../files/encrypt.pending.entity';
import { CreditMovementService } from '../credit-movement/credit-movement.service';

const moment = require('moment');

@Injectable()
export class OrderSoftwareService {

  constructor(
    @InjectRepository(OrderSoftwareEntity)
    private readonly softwareRepository: Repository<OrderSoftwareEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(OrderCustomSoftwareEntity)
    private readonly customSoftwareRepository: Repository<OrderCustomSoftwareEntity>,
    @InjectRepository(OrderSoftwareHistoryEntity)
    private readonly historyEntityRepository: Repository<OrderSoftwareHistoryEntity>,
    @InjectRepository(EncryptPendingEntity)
    private readonly encryptPendingEntityRepository: Repository<EncryptPendingEntity>,
    private readonly socketService: SocketService,
    private readonly subscriptionService: SubscriptionService,
    private readonly s3Service: S3Service,
    private readonly creditMovementService: CreditMovementService,
  ) {
  }

  async index(id): Promise<ResponseInterface> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user != null) {
      let orders = [];
      if (user.type.includes('administrator')) {
        orders = await this.softwareRepository.find({
          order: {
            id: 'DESC',
          },
          relations: ['client', 'calibrator', 'histories'],
        });
      } else if (user.type.includes('calibrator')) {
        orders = await this.softwareRepository.find({
          where: { calibratorId: id },
          order: {
            id: 'DESC',
          },
          relations: ['client', 'calibrator', 'histories'],
        });
      } else if (user.type.includes('calibrator')) {
        orders = await this.softwareRepository.find({
          where: { calibratorId: user.id },
          order: {
            id: 'DESC',
          },
          relations: ['client', 'calibrator'],
        });
      } else {
        orders = await this.softwareRepository.find({
          where: { dealerId: id },
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

  async assign(body): Promise<ResponseInterface> {
    let consulta = await this.softwareRepository.update({ id: body.id }, { calibratorId: body.calibratorId, viewed: '0' });
    const tempData = { id: '', type: '', time: '' };
    tempData.id = `${JSON.stringify(body.id)}`;
    tempData.type = 'AssignedOrder';
    tempData.time = moment(new Date());

    let consulta2 = await this.softwareRepository.find({ id: body.id });
    let userID = consulta2.map((x) => x.dealerId);        

    this.socketService.emitToUser(Number(body.calibratorId), 'notify', tempData);
    tempData.type = 'ClientAssignedOrder';
    this.socketService.emitToUser(Number(userID), 'notify', tempData);

    return {
      statusCode: 200,
      error: null,
      message: null,
    };
  }

  async watch(body): Promise<ResponseInterface> {
    await this.softwareRepository.update({ id: body.id }, { viewed: '1' });

    return {
      statusCode: 200,
      error: null,
      message: null,
    };
  }
  

  async updateStatus(body): Promise<ResponseInterface> {
    await this.softwareRepository.update({ id: body.id }, { status: body.status, viewed: '0' });
    const response = await this.softwareRepository.findOne({ id: body.id });
    response.type = 'StatusChanged';
    this.socketService.emitToUser(response.dealerId, 'notify', JSON.stringify(response));
    if (body.status == 'Completed') {
      let reduced = this.creditMovementService.putDeductedMovenment(response.dealerId, {
        description: `Order N° ${response.orderId}`,
        amount: Number(response.price),
        model: OrderSoftwareEntity.name,
        modelId: response.id,
      });
      if (reduced) {
        return {
          statusCode: 200,
          error: null,
          message: 'Credits',
        };
      } else {
        return {
          statusCode: 200,
          error: null,
          message: 'Credits',
        };
      }
    }
    return {
      statusCode: 200,
      error: null,
      message: null,
    };
  }

  async updateUrgency(body): Promise<ResponseInterface> {
    await this.softwareRepository.update({ id: body.id }, { urgency: body.urgency, viewed: '0' });
    return {
      statusCode: 200,
      error: null,
      message: null,
    };
  }

  async deleteOrder(body) {
    let statusCode = 200;
    const user = await this.userRepository.findOne({ where: { id: body.userId } });
    if (body.type.toString() === 'Custom requests') {
      if (user.type.includes('administrator')) {
        await this.customSoftwareRepository.delete({ id: body.orderId });
      } else {
        const data = await this.customSoftwareRepository.findOne({ where: { id: body.orderId } });
        if (data != null) {
          if (data.calibratorId == null) {
            await this.customSoftwareRepository.delete({ id: body.orderId });
          } else {
            statusCode = 404;
          }
        }
      }
    } else {
      if (user.type.includes('administrator')) {
        await this.softwareRepository.delete({ id: body.orderId });
      } else {
        const data = await this.softwareRepository.findOne({ where: { id: body.orderId } });
        if (data != null) {
          if (data.calibratorId == null) {
            await this.softwareRepository.delete({ id: body.orderId });
          } else {
            statusCode = 404;
          }
        }
      }
    }
    return {
      statusCode,
      error: null,
      message: null,
    };
  }

  async count(): Promise<ResponseInterface> {
    const data = (await this.softwareRepository.find({
        where: [{ status: 'New' }],
      })
    ).map((e) => e.id);

    return { statusCode: 200, error: null, message: data.length };
  }

  async create(body, files): Promise<ResponseInterface> {
    const data = await this.softwareRepository.save({
      orderId: body.orderId,
      type: body.type, // engine - hardware
      dealerId: body.dealerId,
      VIN: body.vin,
      vehicle: body.vehicle,
      credit: body.credit,
      status: 'New',
      urgency: body.urgency,
      description: body.description,
      price: body.price,
    });
    let fileInfo = { encrypt_files: false, message: 'Initial upload' };
    this.addHistory(data.id, fileInfo, files, data.dealerId);

    const user = await this.userRepository.findOne(body.dealerId);
    const users = (await this.userRepository.find({
        where: [{ type: Like(`%administrator%`), status: 1 },
          { type: Like(`%calibrator%`), status: 1 }],
      })
    ).map((e) => e.id);
    // this.socketService.emitToUsers(users, 'newOrderSoftware');
    // this.socketService.emitToAll('newSoftwareOrder', {
    //   name: `${user.name} ${user.lastName}`,
    //   type: body.type,
    // });
    this.socketService.emitToUsers(users, 'notify', {
      id: data.id,
      text: `From ${user.name} ${user.lastName}`,
      title: 'New order',
      time: data.createdAt,
      type: 'newOrderSoftware',
    });

    const info = JSON.parse(body.description);
    const clientInfo = info.description.client;
    this.subscriptionService.saveAndSendOrder(clientInfo.mail, {
      name: clientInfo.name,
      orderId: data.orderId,
      date: data.createdAt,
      ecu: info.item,
    });

    return {
      statusCode: 200,
      error: null,
      message: '',
    };
  }

  async view(body) {
    const data = await this.softwareRepository.findOne({
      relations: ['client', 'calibrator', 'histories', 'histories.user'],
      where: { id: body.id },
    });
    if (data) {
      const infoVin = await getVinInfo(data.VIN);
      const histories = data.histories.filter(el => el.deletedAt === null);
      return {
        order: classToPlain(data),
        histories,
        infoVin,
      };
    } else {
      throw new NotFoundException();
    }
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

  async addHistory(orderId, body, files, userId) {

    //, viewed: '0'
    const getOrder = await this.softwareRepository.findOne({ id: orderId });
    const vehicleInfo = JSON.parse(getOrder.vehicle);
    let filesUploaded: any[];
    let privateFiles = [];
    const originalFiles = [];
    if (body.encrypt_files) {
      privateFiles = await this.s3Service.uploadFiles(files, `hex-files/${vehicleInfo.id}`, {
        acl: 'private',
        tags: [{ Key: 'vehicle_id', Value: vehicleInfo.id }],
      });
      privateFiles = privateFiles.map(file => {
        originalFiles.push({ key: file.key, location: file.location, uuid: file.uuid });
        return {
          downloadUrl: this.s3Service.getSignedUrl(file.key),
          uuid: file.uuid,
          originalname: file.originalname,
        };
      });

      filesUploaded = privateFiles.map(el => {
        return {
          ...el,
          location: null,
        };
      });
    } else {
      filesUploaded = await this.s3Service.uploadFiles(files, `order/answers/${orderId}`);
    }

    const filesSave: any[] = filesUploaded.map(file => {
      return {
        name: file.originalname,
        type: file.mimetype,
        key: file.key,
        s3url: file.location,
        size: file.size,
        uuid: file.uuid,
      };
    });

    await this.softwareRepository.update({ id: orderId }, { viewed: '0' });

    const response = {
      id: orderId,
      type: 'Response',
      text: body.message,
      numberOrder: orderId,
      time: new Date(),
      owner: getOrder.dealerId,
      user: '',
    };

    const model: Partial<OrderSoftwareHistoryEntity> = {
      message: body.message,
      extraData: JSON.stringify(filesSave),
      orderId,
      userId,
    };

    if (response.owner == userId) {
      const users = (await this.userRepository.find({
        where: [{ type: Like(`%administrator%`), status: 1 },
          { type: Like(`%calibrator%`), status: 1 }],
      })).map((e) => e.id);
      const user = (await this.userRepository.findOne({
        where: [{ id: response.owner, status: 1 }],
      }));
      response.user = JSON.stringify(user.name);
      response.user = response.user;
      this.socketService.emitToUsers(users, 'notify', JSON.stringify(response));

    } else {

      response.user = '';
      this.socketService.emitToUser(response.owner, 'notify', JSON.stringify(response));
    }

    await this.historyEntityRepository.insert(model);
    if (body.encrypt_files) {
      const pendingencryptModel: Partial<EncryptPendingEntity> = {
        originalLinks: JSON.stringify(originalFiles),
        urlToResp: `files/order-software/${getOrder.id}/${model.id}`,
        vin: getOrder.VIN,
      };
      await this.encryptPendingEntityRepository.save(pendingencryptModel);
      this.socketService.emitToEncryptFiles({
        url: `files/order-software/${getOrder.id}/${model.id}`,
        files: privateFiles,
        vin: getOrder.VIN,
        encrypt_pending_id: pendingencryptModel.id,
      });
    }
    return model;
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
        arr.push(`${OrderSoftwareEntity.name}.${el} IS NULL`);
      } else if (el === 'name') {
        arr.push(`OrderSoftwareEntity__client.name like \'%${where[el]}%\'`);
      } else {
        arr.push(`${OrderSoftwareEntity.name}.${el} = ${typeof where[el] === 'string' ? '\'' + where[el] + '\'' : where[el]}`);
      }
    });
    if (arr.length) {
      sql += `(${arr.join(' AND ')})`;
    }
    const orders = await this.softwareRepository.find({
      where: sql,
      order: {
        id: 'DESC',
      },
      relations: ['client', 'calibrator'],
    });
    const countPending = await this.softwareRepository.count({
      where: { status: 'New', calibratorId: IsNull() },
    });
    return { orders: classToPlain(orders), countPending, total: orders.length };
  }

}
