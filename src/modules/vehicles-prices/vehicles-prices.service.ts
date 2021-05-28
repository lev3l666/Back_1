import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehiclesPricesEntity } from './vehicles-prices.entity';
import { getRelativePath } from '../../globals';

// tslint:disable-next-line:no-let-requires no-var-requires
const excel = require('excel4node');

// helper
// tslint:disable-next-line:no-var-requires
const readXlsxFile = require('read-excel-file/node');
// tslint:disable-next-line:no-var-requires
const fs = require('fs');

@Injectable()
export class VehiclesPricesService {
  constructor(
    @InjectRepository(VehiclesPricesEntity)
    private readonly vehiclesPricesRepository: Repository<VehiclesPricesEntity>,
  ) {
  }

  async index() {
    return {
      statusCode: 200,
      error: null,
      message: await this.vehiclesPricesRepository.find(),
    };
  }

  async insertDataFromExcelFile(body: []) {
    const dataNoSave = [];
    for (const [i, value] of body.entries()) {
      const model = new VehiclesPricesEntity();
      model.description = value[1];
      model.price = value[2];
      const resultSave = await this.vehiclesPricesRepository.save(model);
      if (!(resultSave.id)) {
        dataNoSave.push(`${i}-${value[0]}-${value[1]}`);
      }
    }

    return dataNoSave;
  }

  public async readExcelFile(name: string): Promise<any> {
    return readXlsxFile(fs.createReadStream(`${getRelativePath()}/${name}`), { sheet: 8 })
      .then(async (rows) => {
        const dataSendToDb: any = [];
        rows.forEach((element, index) => {
          if (index >= 2) {
            dataSendToDb.push(element);
          }
        });
        return await this.insertDataFromExcelFile(dataSendToDb);
      });
  }
}
