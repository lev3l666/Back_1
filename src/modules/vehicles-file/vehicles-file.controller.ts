import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehiclesFileService } from './vehicles-file.service';
import { ResponseInterface } from '../../dto-interface/interface';
import { VehiclesFileDto } from '../../dto-interface/dto';

@Controller('vehicles-file')
export class VehiclesFileController {
  constructor(private readonly vehiclesFileService: VehiclesFileService) {
  }

  @Get()
  async index(): Promise<ResponseInterface> {
    return await this.vehiclesFileService.index();
  }

  @Post()
  async create(@Body() body: VehiclesFileDto): Promise<ResponseInterface> {
    return await this.vehiclesFileService.create(body);
  }

}
