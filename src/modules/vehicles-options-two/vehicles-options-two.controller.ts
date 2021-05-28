import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehiclesOptionsTwoService } from './vehicles-options-two.service';
import { ResponseInterface } from '../../dto-interface/interface';

@Controller('vehicles-secondary-options')
export class VehiclesOptionsTwoController {

  constructor(private readonly vehicleSecondaryOptionsService: VehiclesOptionsTwoService) {
  }

  @Get()
  public async index(): Promise<ResponseInterface> {    
    return await this.vehicleSecondaryOptionsService.index();
  }

  @Get('disabled')
  public async waitingApproval(): Promise<ResponseInterface> {    
    return await this.vehicleSecondaryOptionsService.waitingApproval();
  }

  @Get('count')
  public async count(): Promise<ResponseInterface> {    
    return await this.vehicleSecondaryOptionsService.count();
  }
  
  @Post('create')
  async createProduct(@Body() body) {
    return this.vehicleSecondaryOptionsService.createProduct(body);
  }

  @Post('update')
  async productStatus(@Body() body) {
    return this.vehicleSecondaryOptionsService.productStatus(body);
  }
}
