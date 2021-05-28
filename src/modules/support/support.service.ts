import { Injectable } from '@nestjs/common';
import { Between, IsNull, Repository } from 'typeorm';
import { SupportTicketEntity } from './support.ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportTicketDto } from '../../dto-interface/dto/support.ticket.dto';
import { SupportTicketMessageEntity } from '../support-message/support.ticket.message.entity';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';
import { classToPlain } from 'class-transformer';
import { AppHelper } from '../../utils/app-helper';
import { SupportTicketStatusEntity } from '../support-status/support.ticket.status.entity';
import { SocketService } from '../socket/socket.service';
import { User } from '../user/user.entity';
import { OrderSoftwareEntity } from '../order-software/order-software.entity';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(SupportTicketEntity)
    private readonly supportTicketRepository: Repository<SupportTicketEntity>,
    @InjectRepository(SupportTicketMessageEntity)
    private readonly supportMessageRepository: Repository<SupportTicketMessageEntity>,
    @InjectRepository(OrderCustomSoftwareEntity)
    private readonly customSoftwareEntityRepository: Repository<OrderCustomSoftwareEntity>,
    @InjectRepository(SupportTicketStatusEntity)
    private readonly supportTicketStatusEntityRepository: Repository<SupportTicketStatusEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly socketService: SocketService,
    @InjectRepository(OrderSoftwareEntity)
    private readonly orderSoftwareEntityRepository: Repository<OrderSoftwareEntity>,
    @InjectRepository(OrderCustomSoftwareEntity)
    private readonly orderCustomSoftwareEntityRepository: Repository<OrderCustomSoftwareEntity>,
  ) {
  }

  async newTickets() {
    const count = await this.supportTicketRepository.find({
      where: { staffUserId: null },
    });

    return {
      statusCode: 200,
      error: null,
      message: count.length,
    };
  }

  async findOne(partial: Partial<SupportTicketEntity>) {
    return this.supportTicketRepository.findOne({
      where: partial,
    });
  }

  async create(model: SupportTicketDto, currentUserId) {
    const supportSaved = await this.supportTicketRepository.save({
      clientUserId: currentUserId,
      orderId: model.orderId,
      supportTicketCatId: model.supportTicketCatId,
      supportTicketStatusId: 1,
      questionDep: model.questionDep,
      orderModel: model.orderModel ? OrderSoftwareEntity.name : OrderCustomSoftwareEntity.name,
    });
    await this.supportMessageRepository.save({
      supportTicketId: supportSaved.id,
      userId: currentUserId,
      text: model.initialMessage,
    });
    const response = await this.supportTicketRepository.findOne({
      relations: ['clientUser', 'staffUser', 'supportTicketStatus', 'supportTicketCat', 'supportTicketMessages', 'supportTicketMessages.user'],
      where: { id: supportSaved.id },
    });
    response.order = await this.getOrder(response);
    const users = (await this.userRepository.find({
        where: [{ type: '["administrator"]', status: 1 }, {
          type: '["calibrator"]',
          status: 1,
        }, { type: '["support"]', status: 1 }],
      })
    ).map((e) => e.id);

    this.socketService.emitToUsers(users, 'newTicket', classToPlain(response));
    this.socketService.emitToAll(`supportUpdateList`);

    return response;
  }

  async getChatSupport(supportId) {
    let data = await this.supportTicketRepository.findOne({
      relations: ['clientUser', 'staffUser', 'supportTicketStatus', 'supportTicketCat', 'supportTicketMessages', 'supportTicketMessages.user'],
      where: { id: supportId },
    });
    data.order = await this.getOrder(data);
    return data;
  }

  async getSupportList(param: Partial<SupportTicketEntity>) {
    let data = await this.supportTicketRepository.find({
      where: param,
      relations: ['clientUser', 'staffUser', 'supportTicketStatus', 'supportTicketCat'],
      withDeleted: false,
    });
    data = await Promise.all(data.map(async support => {
      support.order = await this.getOrder(support);
      return support;
    }));
    return data;
  }

  async getSupportStaffList(params) {
    let sql = '';
    const where = AppHelper.filterObjectAndRemoveEmptyValues({
      name: params.name,
      support_ticket_cat_id: params.support_ticket_cat_id,
      support_ticket_status_id: params.support_ticket_status_id,
      staff_user_id: params.staff_user_id,
      question_dep: params.question_dep,
    });
    const arr = [];
    Object.keys(where).forEach(el => {
      if (el === 'staff_user_id' && where[el] === '0') {
        arr.push(`${el} IS NULL`);
      } else if (el !== 'name') {
        arr.push(`${el} = ${typeof where[el] === 'string' ? '\'' + where[el] + '\'' : where[el]}`);
      } else {
        arr.push(`SupportTicketEntity__clientUser.name LIKE \'%${where[el]}%\'`);
      }
    });
    if (arr.length) {
      sql += `(${arr.join(' AND ')})`;
    }

    let data = await this.supportTicketRepository.find({
      take: params?.perPage ? params.perPage : 10,
      skip: params?.page ? (params.page - 1) * (params.perPage) : 0,
      relations: ['clientUser', 'supportTicketStatus', 'supportTicketCat', 'staffUser'],
      where: sql,
      order: { id: 'DESC' },
      withDeleted: false,
    });
    console.log(data);
    data = await Promise.all(data.map(async support => {
      support.order = await this.getOrder(support);
      return support;
    }));

    this.supportTicketRepository.createQueryBuilder();

    const totalCount = await this.supportTicketRepository.count({
      relations: ['clientUser'],
      where: sql,
    });

    const countPending = await this.supportTicketRepository.count({
      where: { supportTicketStatusId: 1, staffUserId: IsNull() },
    });

    return {
      data: classToPlain(data),
      count: totalCount,
      countPending,
    };
  }

  async assignSupport(id: any, userID: any) {
    await this.supportTicketRepository
      .update(id, { staffUserId: userID });
    this.socketService.emitToAll(`supportUpdate:${id}`);
    this.socketService.emitToAll(`supportUpdateList`);
    let data = await this.supportTicketRepository.findOne({
      relations: ['clientUser', 'staffUser', 'supportTicketStatus', 'supportTicketCat'],
      where: { id },
    });
    data.order = await this.getOrder(data);
    return data;
  }

  async updateSupport(id: any, body: any) {
    await this.supportTicketRepository
      .update(id, body);
    this.socketService.emitToAll(`supportUpdate:${id}`);
    this.socketService.emitToAll(`supportUpdateList`);
    let data = await this.supportTicketRepository.findOne({
      relations: ['clientUser', 'staffUser', 'supportTicketStatus', 'supportTicketCat'],
      where: { id },
    });
    data.order = await this.getOrder(data);
    return data;
  }

  async getOrdersForTypes(req) {
    const user = req.user;
    return this.customSoftwareEntityRepository.createQueryBuilder('')
      .where({ userId: user.id })
      .getMany();
  }

  async deleteRow(id) {
    return this.supportTicketRepository.softDelete({ id });
  }

  async getGraphicsHistory() {
    const since = new Date(new Date().setDate((new Date()).getDate() - 6));

    const dates = AppHelper.getDateRangeArray(AppHelper.addDays(new Date(), -7), new Date());

    const lastWeek: any[] = await this.supportTicketRepository.createQueryBuilder('t')
      .select('count(t.id) as c, created_at')
      .where({ createdAt: Between(since.toISOString().slice(0, 10), `${new Date().toISOString().slice(0, 10)} 23:59:59`) })
      .groupBy('DAY(t.created_at)')
      .getRawMany();

    const data = [];
    dates.forEach(el => {
      const numberFind = lastWeek.find(row => {
        return row.created_at.toString().slice(0, 10) === el.toString().slice(0, 10);
      });
      data.push(numberFind ? Number(numberFind.c) : 0);
    });
    const dataSet = {
      data,
    };

    return {
      labels: dates,
      datasets: [
        dataSet,
      ],
    };
  }

  async getGraphicsBars() {
    const data = await this.supportTicketStatusEntityRepository.createQueryBuilder(`support_ticket_status`)
      .select(['*', `(${this.supportTicketRepository.createQueryBuilder(`support_ticket`)
        .select('count(*)')
        .where('support_ticket_status.id = support_ticket.support_ticket_status_id')
        .getSql()}) as rowCount`,
      ])
      .getRawMany();
    return {
      labels: data.map(el => el.name),
      datasets: [
        {
          data: data.map(el => Number(el.rowCount)),
        },
      ],
    };
  }

  protected async getOrder(model: SupportTicketEntity) {
    let order = null;
    if (model.orderModel === OrderSoftwareEntity.name) {
      order = await this.orderSoftwareEntityRepository.findOne(model.orderId);
    }
    if (model.orderModel === OrderCustomSoftwareEntity.name) {
      order = await this.orderCustomSoftwareEntityRepository.findOne(model.orderId);
    }
    return order;
  }
}
