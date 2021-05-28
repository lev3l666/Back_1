import { Controller, Get } from '@nestjs/common';
import { DsgOptionsService } from './dsg-options.service';
import { ResponseInterface } from '../../dto-interface/interface';

@Controller('dsg-options')
export class DsgOptionsController {

  constructor(private readonly dsgService: DsgOptionsService) {
  }

  @Get()
  public async index(): Promise<ResponseInterface> {
    return await this.dsgService.index();
  }

}
