import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComboPricesEntity } from './combo_prices.entity';
import { ResponseInterface } from '../../dto-interface/interface';
import { getRelativePath } from '../../globals';

const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
const moment = require('moment');

@Injectable()
export class Combo_pricesService {
  constructor(
    @InjectRepository(ComboPricesEntity)
    private readonly vehicleOptionRepository: Repository<ComboPricesEntity>,
  ) {
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
      const model = new ComboPricesEntity();
      if (value [1] !== 'Type') {
        model.dsg = value[0];
        model.ecu1Dsg1 = value[1];
        model.ecu22pDsg2p = value[2];
        model.ecu22pDsg3 = value[3];
        model.ecu3Dsg34 = value [4];
        model.ecu4Dsg34 = value [5];
        const resultSave = await this.vehicleOptionRepository.save(model);
        if (!(resultSave.id)) {
          dataNoSave.push(`${i}-${value[0]}-${value[1]}`);
        }
      }
    }

    return dataNoSave;
  }

  public async readExcelFile(name: string): Promise<any> {
    return readXlsxFile(fs.createReadStream(`${getRelativePath()}/${name}`), { sheet: 7 })
      .then(async (rows) => {
        const dataSendToDb: any = [];
        rows.forEach((element, index) => {
          if (index > 2) {
            dataSendToDb.push(element);
          }
        });
        return await this.insertDataFromExcelFile(dataSendToDb);
      });
  }
}
