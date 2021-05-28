import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DsgOptionsTwoEntity } from './dsg-options-two.entity';
import { getRelativePath } from '../../globals';

// tslint:disable-next-line:no-var-requires
const readXlsxFile = require('read-excel-file/node');
// tslint:disable-next-line:no-var-requires
const fs = require('fs');

@Injectable()
export class DsgOptionsTwoService {
  constructor(
    @InjectRepository(DsgOptionsTwoEntity)
    private readonly dsgOptionTwoRepository: Repository<DsgOptionsTwoEntity>,
  ) {
  }

  async index() {
    return {
      statusCode: 200,
      error: null,
      message: await this.dsgOptionTwoRepository.find(),
    };
  }

  async insertDataFromExcelFile(body: []) {
    const dataNoSave = [];
    for (const [i, value] of body.entries()) {
      const model = new DsgOptionsTwoEntity();
      model.type = value[1];
      model.description = value[2];
      model.explanation = value[3];
      model.optionId = value[4];

      const resultSave = await this.dsgOptionTwoRepository.save(model);
      if (!(resultSave.id)) {
        dataNoSave.push(`${i}-${value[0]}-${value[1]}`);
      }
    }

    return dataNoSave;
  }

  public async readExcelFile(name: string): Promise<any> {
    return readXlsxFile(fs.createReadStream(`${getRelativePath()}/${name}`), { sheet: 6 })
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
