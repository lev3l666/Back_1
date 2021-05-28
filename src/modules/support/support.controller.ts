import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { SupportTicketDto } from '../../dto-interface/dto/support.ticket.dto';
import { Validation } from '../../utils/Validation';
import { SupportService } from './support.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../decorators/roles/modules.guard';
import { OrderSoftwareEntity } from '../order-software/order-software.entity';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';

@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('support')
export class SupportController {

  constructor(private readonly service: SupportService) {
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('view/:id')
  async list(@Param('id') id: ParseIntPipe) {
    return await this.service.getChatSupport(id);
  }

  @Post('count')
  async count() {
    return await this.service.newTickets();
  }

  @UsePipes(new Validation())
  @Post()
  async create(@Body() body: SupportTicketDto, @Req() req) {
    return await this.service.create(body, req.user.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('assign-agent/:id')
  async agent(@Param('id') id, @Body() body: any, @Req() req) {
    return this.service.assignSupport(id, req.user.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('update/:id')
  async update(@Param('id') id, @Body() body: any, @Req() req) {
    return this.service.updateSupport(id, body);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('client-list/:id')
  async clientList(@Req() req, @Param('id') id) {
    return await this.service.getSupportList({
      clientUserId: req.user.id,
      supportTicketCatId: id,
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('admin-list')
  async staffList(@Query() query, @Req() req) {
    return await this.service.getSupportStaffList(query);
  }

  @Get('custom-orders')
  async ordersToTypes(@Req() req) {
    return await this.service.getOrdersForTypes(req);
  }

  @Post('delete/:id')
  async delete(@Param('id') id) {
    return this.service.deleteRow(id);
  }

  @Get('graphics-history')
  async graphicsHistory() {
    return this.service.getGraphicsHistory();
  }

  @Get('graphics-bars')
  async graphicsBars() {
    return this.service.getGraphicsBars();
  }

  @Post('check-support')
  async checkSupport(@Body() body) {
    const model = body.model ? OrderSoftwareEntity.name : OrderCustomSoftwareEntity.name;
    return this.service.findOne({ orderId: body.order_id, orderModel: model });
  }
}
