import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { SupportStatusService } from './support-status.service';

@Controller('support-status')
export class SupportStatusController {
  constructor(private readonly service: SupportStatusService) {
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async list() {
    return await this.service.listAll();
  }
}
