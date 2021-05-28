import { Injectable } from '@nestjs/common';
import { ResponseInterface } from '../../dto-interface/interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscriptionEntity } from './subscription.entity';
import { encrypt, sendEmail } from '../../services';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(SubscriptionEntity)
    private readonly subscriptionRepository: Repository<SubscriptionEntity>,
  ) {
  }

  async subscribe(body): Promise<ResponseInterface> {
    
    const exist = await this.subscriptionRepository.findOne({ email: body.email });
    if (exist == null && body.email != null) {
      await this.subscriptionRepository.save({ email: body.email });
    }
    return {
      statusCode: 200,
      error: null,
      message: '',
    };
  }

  async saveAndSendOrder(email, order) {
    
    if (email != null && email != undefined && email != '  ' && email != '') {
      sendEmail({
        to: email,
        subject: 'ORDER ',
        html: 'order-to-client',
        data: order,
      });
      this.subscriptionRepository.save({ email: email }).catch();      
    }
  }
}
