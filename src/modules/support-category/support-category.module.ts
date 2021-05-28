import { Module } from '@nestjs/common';
import { SupportCategoryController } from './support-category.controller';
import { SupportCategoryService } from './support-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportTicketCategoryEntity } from './support.ticket.category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupportTicketCategoryEntity]),
  ],
  controllers: [SupportCategoryController],
  providers: [SupportCategoryService],
})
export class SupportCategoryModule {
}
