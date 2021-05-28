import { Controller, Get } from '@nestjs/common';
import { VehiclesDsgService } from './vehicles-dsg.service';
import { ResponseInterface } from '../../dto-interface/interface';

@Controller('vehicles-dsg')
export class VehiclesDsgController {

  constructor(private readonly vehiclesDsgService: VehiclesDsgService) {
  }

  @Get()
  public async index(): Promise<ResponseInterface> {
    return await this.vehiclesDsgService.index();
  }

}
