import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreditPriceService } from './credit-price.service';

@UseGuards(AuthGuard('jwt'))
@Controller('credit-price')
export class CreditPriceController {

  constructor(private readonly creditOrderService: CreditPriceService) {
  }

  @Get()
  async priceTobuy(@Req() req) {
    let user = req.user;
    return this.creditOrderService.priceListToBuy(user);
  }

  @Get('list')
  async priceList(@Req() req) {
    let user = req.user;
    let owner_id = null;
    if (user.role.includes('distributor')) {
      owner_id = user.id;
    }
    return this.creditOrderService.findOwmerList(owner_id);
  }

  @Post('save')
  async save(@Req() req, @Body() body) {
    let user = req.user;
    let owner_id = null;
    if (user.role.includes('distributor')) {
      owner_id = user.id;
    }
    return this.creditOrderService.saveList(owner_id, body);
  }

}
