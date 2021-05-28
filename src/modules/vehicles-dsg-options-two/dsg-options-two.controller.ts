import { Controller, Get } from '@nestjs/common';
import { ResponseInterface } from '../../dto-interface/interface';
import { DsgOptionsTwoService } from './dsg-options-two.service';

@Controller('dsg-options-two')
export class DsgOptionsTwoController {

  constructor(private readonly dsgSecondaryOptionsService: DsgOptionsTwoService) {
  }

  @Get()
  public async index(): Promise<ResponseInterface> {
    return await this.dsgSecondaryOptionsService.index();
  }
}
