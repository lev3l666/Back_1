import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreditOrderEntity } from './credit-order.entity';
import { encrypt, sendEmail } from '../../services';
import { User } from '../user/user.entity';
import { CreditPriceEntity } from '../credit-price/credit-price.entity';
import { CreditMovementEntity } from '../credit-movement/credit-movement.entity';
import { CreditMovementService } from '../credit-movement/credit-movement.service';
import { CompanyEntity } from '../company/company.entity';
import { Pagination } from '../../dto-interface/interface/pagination';
import { UserReq } from '../../dto-interface/interface/UserReq';
import { classToPlain } from 'class-transformer';

@Injectable()
export class CreditOrderService {
  constructor(
    @InjectRepository(CreditOrderEntity)
    private readonly creditOrderRepository: Repository<CreditOrderEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CreditOrderEntity)
    private readonly creditOrderEntityRepository: Repository<CreditOrderEntity>,
    @InjectRepository(CreditPriceEntity)
    private readonly creditPriceEntityRepository: Repository<CreditPriceEntity>,
    @InjectRepository(CreditMovementEntity)
    private readonly creditMovementEntityRepository: Repository<CreditMovementEntity>,
    @InjectRepository(CompanyEntity)
    private readonly companyEntityRepository: Repository<CompanyEntity>,
    private readonly creditMovementService: CreditMovementService,
  ) {
  }

  async index(user: UserReq, pagination?: Pagination) {
    if (!pagination) {
      pagination = { page: 1, limit: 20 };
    }
    if (user.role.includes('administrator')) {
      const data: any[] = await this.creditOrderRepository.find({
        order: { id: 'DESC' },
        skip: ((pagination.page - 1) * pagination.limit),
        take: pagination.limit,
      });
      for (const item of data) {
        const user = await this.userRepository.findOne({ where: { id: item.userId } });
        item.user = user.fullName();
      }
      const count = await this.creditOrderRepository.count();
      return { data, count };
    } else {
      const data: any[] = await this.creditOrderRepository.find({
        where: { userId: user.id },
        order: { id: 'DESC' },
        skip: ((pagination.page - 1) * pagination.limit),
        take: pagination.limit,
      });

      for (const item of data) {
        const user = await this.userRepository.findOne({ where: { id: item.userId } });
        item.user = user.fullName();
      }
      const count = await this.creditOrderRepository.count({ userId: user.id });
      return {
        data, count,
      };
    }

  }

  async view(body) {
    const order: any = await this.creditOrderRepository.findOne({ where: { id: body.id }, relations: ['user'] });
    if (order) {
      const company = await this.companyEntityRepository.findOne({ userId: order.userId });
      return {
        order: classToPlain(order), company,
      };
    }
    throw new NotFoundException();
  }

  async update(body) {
    const order = await this.creditOrderRepository.update(
      { id: body.id },
      {
        credit: body.credit,
        description: body.description,
        discount: body.discount,
        price: body.price,
        status: body.status,
      },
    );
    return {
      statusCode: 200,
      error: '',
      message: order,
    };
  }

  async create(body, user) {
    const lastOrder = await this.creditOrderRepository.findOne({
      order: { id: 'DESC' },
    });
    let lastOrderNo = 1;
    if (lastOrder) {
      lastOrderNo = lastOrder.id + 1;
    }
    const order: Partial<CreditOrderEntity> = {
      numberOrder: 'OCR-21' + lastOrderNo,
      description: `Buy credits`,
      credit: body.credit,
      price: body.price,
      discount: body.discount,
      status: 'New',
      userId: user.id,
    };
    await this.creditOrderEntityRepository.save(order);
    return order;
  }

  async sendOffer(body) {
    const discount = Math.round(((body.credits - body.price) / body.credits) * 100);
    const user = await this.userRepository.findOne(body.user_id);
    const credits = Number(body.credits);
    const price = Number(body.price);
    const lastOrder = await this.creditOrderRepository.findOne({
      order: { id: 'DESC' },
    });
    let lastOrderNo = 1;
    if (lastOrder) {
      lastOrderNo = lastOrder.id + 1;
    }
    const order: Partial<CreditOrderEntity> = {
      numberOrder: 'OCR-21' + lastOrderNo,
      description: 'Offer Sent',
      credit: credits,
      price,
      discount,
      status: 'Offer',
      userId: user.id,
    };
    await this.creditOrderEntityRepository.save(order);
    const url = await encrypt(JSON.stringify({ id: order.id, no: order.numberOrder }));
    await sendEmail({
      to: user.email,
      subject: 'NOTIFICATIONS',
      html: 'sendOffer',
 
    });
    return Promise.resolve(url);
  }

  async putOrder(body, user) {
    return '';
  }

  async confirm(id) {
    const order = await this.creditOrderEntityRepository.findOne(id);
    this.creditOrderEntityRepository.update(
      { id: order.id },
      { status: 'Payment confirmed' },
    );
    const invoiceNumber = await this.calculateNumberOrder(order.id);
    const creditMovement: Partial<CreditMovementEntity> = {
      userId: order.userId,
      amount: order.credit,
      euro: order.price,
      factor: order.price / order.credit,
      model: CreditOrderEntity.name,
      modelId: order.id,
      description: `Credits bought / Order N° ${order.numberOrder}  Invoice Nª  ${invoiceNumber}`,
    };
    await this.creditMovementEntityRepository.save(creditMovement);
    const user = await this.userRepository.findOne(order.userId);
    let company: any = await this.companyEntityRepository.findOne({userId: user.id});
    if (company != null) {
      company = {
        nameCompany: company.nameCompany,
        legalRepresentative: company.legalRepresentative,
        address: company.address,
        city: company.city,
        zipCode: company.zipCode,
        country: company.country,
      };
    } else {
      company = {
        nameCompany: '',
        legalRepresentative: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
      };
    }
    const fecha = order.createdAt.toString().slice(0, 10);
    await sendEmail({
      to: user.email,
      subject: `INVOICE N° ${invoiceNumber} - TVS GROUP INTERNATIONAL`,
      html: 'invoiceOrderCredit',
      data: {
        date: (new Date).toDateString(),
        numberInvoice: invoiceNumber,
        order: {
          createdAt: fecha,
          credit: order.credit,
          discount: order.discount,
          price: order.price,
        },
        company,
      },
    });
    return creditMovement;
  }

  async acceptoffer(body) {
    await this.creditOrderRepository.update({ id: body.id }, { status: 'New' });
    return {
      statusCode: 200,
      error: '',
      message: 'success',
    };
  }

  calculateNumberOrder(orderId) {
    return new Promise(resolve => {
      const zeros = '000';
      let id = orderId.toString();
      id = id.length;
      const numberr = zeros.slice(0, -id);
      resolve(numberr + orderId);
    });
  }
}
