import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './company.entity';
import { Repository } from 'typeorm';
import { CompanyInterface } from '../../dto-interface/interface';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {
  }

  async index(body) {
    const company = await this.companyRepository.findOne({ userId: body.id });
    return {
      statusCode: 200,
      error: null,
      message: company,
    };
  }

  async create(body): Promise<CompanyInterface> {
    body.socialMedia = JSON.stringify(body.socialMedia);
    body.products = JSON.stringify(body.products);
    body.tunes = JSON.stringify(body.tunes);
    body.dinanometer = 0;
    // body.selling_hardware_dsg = '';
    // console.log(body);
    const data = await this.companyRepository.save(body);
    if (data) {
      return {
        statusCode: 200,
        error: null,
        message: data,
      };
    } else {
      return {
        statusCode: 400,
        error: null,
        message: data,
      };
    }
  }

}
