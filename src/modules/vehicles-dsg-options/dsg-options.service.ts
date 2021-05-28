import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DsgOptionsEntity } from './dsg-options.entity';
import { ResponseInterface } from '../../dto-interface/interface';
import { getRelativePath } from '../../globals';
// 
const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
const moment = require('moment');

@Injectable()
export class DsgOptionsService {

  constructor(
    @InjectRepository(DsgOptionsEntity)
    private readonly vehicleOptionRepository: Repository<DsgOptionsEntity>,
  ) {
  }

  async index() {
    return {
      statusCode: 200,
      error: null,
      message: await this.vehicleOptionRepository.find(),
    };
  }

  public async getDataExcelFile(): Promise<ResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      message: await this.getAllData(),
    };
  }

  async getAllData() {
    return new Promise(async resolve => {
      const data = (await this.vehicleOptionRepository.find()).map((product) => {
        return {
          ...product,
          createdAt: moment(product.createdAt).format('DD/MM/YYYY'),
        };
      });
      resolve(data);
    });
  }

  async insertDataFromExcelFile(body: []) {
    const dataNoSave = [];
    for (const [i, value] of body.entries()) {
      const model = new DsgOptionsEntity();
      model.optionId = value[0];
      model.name = value[1];
      model.description = value[2];
      model.options = value[3];
      model.type = value [4];
      const resultSave = await this.vehicleOptionRepository.save(model);
      if (!(resultSave.id)) {
        dataNoSave.push(`${i}-${value[0]}-${value[1]}`);
      }
    }

    return dataNoSave;
  }

  public async readExcelFile(name: string): Promise<any> {
    return readXlsxFile(fs.createReadStream(`${getRelativePath()}/${name}`), { sheet: 5 })
      .then(async (rows) => {
        const dataSendToDb: any = [];
        rows.forEach((element, index) => {
          if ((String(element).includes('ID')) && (String(element).includes('Type')) && (String(element).includes('Explanation')) && (String(element).includes('Option'))) {
            index++;
          } else {
            dataSendToDb.push(element);
          }
        });
        return await this.insertDataFromExcelFile(dataSendToDb);
      });
  }
}

