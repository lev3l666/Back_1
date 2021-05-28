import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { SupportCategoryService } from './support-category.service';

@Controller('support-category')
export class SupportCategoryController {
  constructor(private readonly service: SupportCategoryService) {
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async list() {
    return await this.service.listAll();
  }
}
