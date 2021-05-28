import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehiclesOptionsEntity } from './vehicles-options.entity';
import { ResponseInterface } from '../../dto-interface/interface';
import { getRelativePath } from '../../globals';

// helper
// tslint:disable-next-line:no-var-requires
const readXlsxFile = require('read-excel-file/node');
// tslint:disable-next-line:no-var-requires
const fs = require('fs');

// tslint:disable-next-line:no-let-requires no-var-requires
const moment = require('moment');

@Injectable()
export class VehiclesOptionsService {

  constructor(
    @InjectRepository(VehiclesOptionsEntity)
    private readonly vehicleOptionRepository: Repository<VehiclesOptionsEntity>,
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
      const model = new VehiclesOptionsEntity();
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
    return readXlsxFile(fs.createReadStream(`${getRelativePath()}/${name}`), { sheet: 2 })
      .then(async (rows) => {
        const dataSendToDb: any = [];
        rows.forEach((element, index) => {
          if ((String(element).includes('ID')) && (String(element).includes('Type')) &&
            (String(element).includes('Explanation')) && (String(element).includes('Option'))) {
            index++;
          } else {
            dataSendToDb.push(element);
          }
        });
        return await this.insertDataFromExcelFile(dataSendToDb);
      });
  }
}
