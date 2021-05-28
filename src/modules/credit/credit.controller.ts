import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CreditService } from './credit.service';
import { ResponseInterface } from '../../dto-interface/interface';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {
  }

  @Get('count-acounts')
  countSubacounts(@Req() req){
    return this.creditService.countSubAcounts(req.user)
  }

  @Post('index')
  public async index(@Body()body): Promise<ResponseInterface> {
    return this.creditService.index(body);
  }

  @Get('history/:id')
  public async history(@Param('id')id): Promise<ResponseInterface> {
    return this.creditService.history(id);
  }

  @Post('transfer')
  public async transfer(@Body() body, @Req() req): Promise<ResponseInterface> {
    return this.creditService.transfer(body, req.user);
  }

  @Post('deduced')
  public async deduced(@Body() body, @Req() req): Promise<ResponseInterface> {
    return this.creditService.deduced(body);
  }

}
