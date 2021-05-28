import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { VehiclesOptionsService } from './vehicles-options.service';
import { ResponseInterface } from '../../dto-interface/interface';

// tslint:disable-next-line:no-var-requires

@UseGuards(AuthGuard('jwt'))
@Controller('vehicles-options')
export class VehiclesOptionsController {

  constructor(private readonly vehiclesOptionService: VehiclesOptionsService) {
  }

  @Get()
  public async index(): Promise<ResponseInterface> {
    return await this.vehiclesOptionService.index();
  }

}
