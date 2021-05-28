import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehiclesDSGCombosEntity } from './/vehicles-dsg-combos.entity';
import { getRelativePath } from '../../globals';

// helper
// tslint:disable-next-line:no-var-requires
const readXlsxFile = require('read-excel-file/node');
// tslint:disable-next-line:no-var-requires
const fs = require('fs');

@Injectable()
export class VehiclesDsgService {
  constructor(
    @InjectRepository(VehiclesDSGCombosEntity)
    private readonly vehiclesDsgRepository: Repository<VehiclesDSGCombosEntity>,
  ) {
  }

  async index() {
    return {
      statusCode: 200,
      error: null,
      message: await this.vehiclesDsgRepository.find(),
    };
  }

  async insertDataFromExcelFile(body: []) {
    const dataNoSave = [];
    for (const [i, value] of body.entries()) {
      const model = new VehiclesDSGCombosEntity();
      model.DSG = value[0];
      model.prefijo = value[1];
      model.stockTorque = value[2];
      model.stockLocation = value[3];
      model.stockDsgSoftware = value[4];
      model.stockDsgWarnings = value[5];
      model.stockPrice = value[6];
      model.stageOneTorque = value[7];
      model.stageOneLocation = value[8];
      model.stageOneDsgSoftware = value[9];
      model.stageOneDsgWarnings = value[10];
      model.stageOnePrice = value[11];
      model.stageTwoTorque = value[12];
      model.stageTwoLocation = value[13];
      model.stageTwoDsgSoftware = value[14];
      model.stageTwoDsgWarnings = value[15];
      model.stageTwoPrice = value[16];
      model.stageTwoPlusTorque = value[17];
      model.stageTwoPlusLocation = value[18];
      model.stageTwoPlusDsgSoftware = value[19];
      model.stageTwoPlusDsgWarnings = value[20];
      model.stageTwoPlusPrice = value[21];
      model.stageThreeTorque = value[22];
      model.stageThreeLocation = value[23];
      model.stageThreeDsgSoftware = value[24];
      model.stageThreeDsgWarnings = value[25];
      model.stageThreePrice = value[26];
      model.stageFourTorque = value[27];
      model.stageFourLocation = value[28];
      model.stageFourDsgSoftware = value[29];
      model.stageFourDsgWarnings = value[30];
      model.stageFourPrice = value[31];
      const resultSave = await this.vehiclesDsgRepository.save(model);
      if (!(resultSave.id)) {
        dataNoSave.push(`${i}-${value[0]}-${value[1]}`);
      }
    }
    return dataNoSave;
  }

  public async readExcelFile(name: string): Promise<any> {
    return readXlsxFile(fs.createReadStream(`${getRelativePath()}/${name}`), { sheet: 4 })
      .then(async (rows) => {
        const dataSendToDb: any = [];
        rows.forEach((element, index) => {
          if (index > 3) {
            dataSendToDb.push(element);
          }
        });
        return await this.insertDataFromExcelFile(dataSendToDb);
      });
  }

}
