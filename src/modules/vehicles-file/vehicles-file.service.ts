import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiclesFileEntity } from './vehicles-file.entity';
import { ResponseInterface } from '../../dto-interface/interface';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesFileService {
  constructor(
    @InjectRepository(VehiclesFileEntity)
    private readonly fileRepository: Repository<VehiclesFileEntity>,
  ) {
  }

  async index(): Promise<ResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      message: await this.fileRepository.find(),
    };
  }

  async create(body): Promise<ResponseInterface> {
    await this.fileRepository.save(body);
    return {
      statusCode: 200,
      error: null,
      message: null,
    };

  }

}
