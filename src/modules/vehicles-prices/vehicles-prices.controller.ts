import { Controller, Get } from '@nestjs/common';
import { VehiclesPricesService } from './vehicles-prices.service';
import { ResponseInterface, UploadExcelFileResponseInterface } from '../../dto-interface/interface';

@Controller('vehicles-prices')
export class VehiclesPricesController {
  constructor(private readonly vehiclesPricesService: VehiclesPricesService) {
  }
  @Get()
  public async index(): Promise<ResponseInterface> {
    return await this.vehiclesPricesService.index();
  }

}
