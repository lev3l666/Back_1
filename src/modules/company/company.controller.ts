import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CompanyDto } from '../../dto-interface/dto';
import { CompanyInterface } from '../../dto-interface/interface';
import { CompanyService } from './company.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('company')
export class CompanyController {

  constructor(private readonly companyService: CompanyService) {
  }

  @Post()
  async create(@Body() body: CompanyDto): Promise<CompanyInterface> {
    return await this.companyService.create(body);
  }

  @Get('/:id')
  async index(@Param() body): Promise<CompanyInterface> {
    return await this.companyService.index(body);
  }
}
