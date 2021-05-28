import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { CreditMovementService } from './credit-movement.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('credit-movement')
export class CreditMovementController {
  constructor(private readonly creditMovementService: CreditMovementService) {
  }

  @Post()
  admin(@Query() query, @Body() body){
    return this.creditMovementService.list(body, query)
  }

  @Get('history')
  userHistory(@Req() req, @Query() query) {
    return this.creditMovementService.findListByUser(req.user.id, query);
  }

  @Get('history/:id')
  userIdHistory(@Param('id') userId, @Query() query) {
    return this.creditMovementService.findListByUser(userId, query);
  }

  @Get('balance')
  userBalance(@Req() req) {
    return this.creditMovementService.getUserBalance(req.user.id);
  }
}
