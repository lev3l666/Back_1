import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreditOrderService } from './credit-order.service';
import { SendOfferDto } from '../../dto-interface/dto/send-offer.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('credit-order')
export class CreditOrderController {
  constructor(private readonly creditOrderService: CreditOrderService) {
  }

  @Get('index')
  async index(@Body() body, @Req() req, @Query() query) {
    return await this.creditOrderService.index(req.user, query);
  }

  @Post('send-offer')
  async sendOfert(@Body() body: SendOfferDto) {
    return await this.creditOrderService.sendOffer(body);
  }

  @Post('put-order')
  async acceptOfert(@Body() body, @Req() req) {
    return await this.creditOrderService.putOrder(body, req.user);
  }

  @Post('confirm')
  confirm(@Body('id') id) {
    return this.creditOrderService.confirm(id);
  }

  @Post('view')
  async view(@Body() body) {
    return await this.creditOrderService.view(body);
  }

  @Post('update')
  async update(@Body() body) {
    return await this.creditOrderService.update(body);
  }

  @Post()
  async create(@Body() body, @Req() req) {
    return await this.creditOrderService.create(body, req.user);
  }

  @Post('accept-offer')
  async acceptoffer(@Body() body) {
    return await this.creditOrderService.acceptoffer(body);
  }
}
