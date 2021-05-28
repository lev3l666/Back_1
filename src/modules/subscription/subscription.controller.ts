import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResponseInterface } from '../../dto-interface/interface';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {

  constructor(private readonly subscriptionsService: SubscriptionService) {
  }

  @Post('subscribe')
  public async subscribe(@Body() body): Promise<ResponseInterface> {
    return this.subscriptionsService.subscribe(body);
  }

  @Get()
  async list(){

  }


}
