import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, In, Repository } from 'typeorm';
import { VehiclesEntity } from './vehicles.entity';
import { ResponseInterface, UploadExcelFileResponseInterface } from '../../dto-interface/interface';
import { VehiclesOptionsEntity } from '../vehicles-options/vehicles-options.entity';
import { VehiclesFileEntity } from '../vehicles-file/vehicles-file.entity';
import { ComboPricesEntity } from '../combo_prices/combo_prices.entity';
import { addCellBlanckAndTitle } from './helper';
import { processPricesStages } from '../../services/helpers/utilities';
import * as path from 'path';
import * as excel from 'excel4node';
import * as readXlsxFile from 'read-excel-file/node';
import * as fs from 'fs';
import * as helper from './helper';
import * as moment from 'moment';
import * as dorenv from 'dotenv';

dorenv.config({ path: '.env' });

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(VehiclesEntity)
    private readonly vehicleRepository: Repository<VehiclesEntity>,
    @InjectRepository(VehiclesOptionsEntity)
    private readonly vehicleOptionsRepository: Repository<VehiclesOptionsEntity>,
    @InjectRepository(VehiclesFileEntity)
    private readonly vehicleFileRepository: Repository<VehiclesFileEntity>,
    @InjectRepository(ComboPricesEntity)
    private readonly ComboPricesRepository: Repository<ComboPricesEntity>,
  ) {
  }

  async insertDataFromExcelFile(body: []) {
    const dataNoSave = [];
    for (const [i, value] of body.entries()) {
      const model = new VehiclesEntity();
      model.make = value[0];
      model.model = value[1];
      model.generation = value[2];
      model.engine = value[3];
      const valueEngine = value[4];
      // @ts-ignore
      model.engineCode = (valueEngine !== null) ? JSON.stringify(valueEngine.split(';')) : '';
      model.engineFamily = value[5];
      model.dsg = value[6];
      model.stockPower = value[7];
      model.stockTorque = value[8];
      model.stageOnePower = value[9];
      model.stageOneTorque = value[10];
      model.stageOneOne = value[11];
      model.stageOnePrice = value[12];
      model.stageTwoPower = value[13];
      model.stageTwoTorque = value[14];
      model.stageTwoOne = value[15];
      model.stageTwoPrice = value[16];
      model.stageTwoPlusPower = value[17];
      model.stageTwoPlusTorque = value[18];
      model.stageTwoPlusOne = value[19];
      model.stageTwoPlusTwo = value[20];
      model.stageTwoPlusThree = value[21];
      model.stageTwoPlusFour = value[22];
      model.stageTwoPlusPrice = value[23];
      // value[23] has an unknown bug
      model.stageThreeTorque = value[25];
      model.stageThreeOne = value[26];
      model.stageThreeTwo = value[27];
      model.stageThreeThree = value[28];
      model.stageThreeFour = value[29];
      model.stageThreePrice = value[30];
      model.stageFourPower = value[31];
      model.stageFourTorque = value[32];
      model.stageFourOne = value[33];
      model.stageFourTwo = value[34];
      model.stageFourThree = value[35];
      model.stageFourFour = value[36];
      model.stageFourPrice = value[37];
      const resultSave = await this.vehicleRepository.save(model);

      if (!resultSave.id) {
        dataNoSave.push(`${i}-${value[0]}-${value[1]}`);
      }
    }

    return dataNoSave;
  }

  public async readExcelFile(name: string): Promise<any> {
    let pathA: any = __dirname;
    pathA = pathA.split('dist');
    return readXlsxFile(fs.createReadStream(`${pathA[0] + 'files'}/${name}`), {
      sheet: 1,
    }).then(async rows => {
      const dataSendToDb: any = [];
      rows.forEach((element, index) => {
        if (index > 2) {
          dataSendToDb.push(element);
        }
      });

      // /* COMMENTED OUT THE IMPORTER FIX*/
      // const relations = [
      //   { o: '7', n: ['10'] },
      //   { o: '8', n: ['11'] },
      //   { o: '10', n: ['12'] },
      //   { o: '11', n: ['13'] },
      //   { o: '13', n: ['14', '15'] },
      //   { o: '14', n: ['16'] },
      //   { o: '15', n: ['17'] },
      // ];
      // const relations2 = [{ o: '9', n: '7' }, { o: '12', n: '8' }];
      // const move = [{ o: '2', n: '1' }, { o: '3', n: '2' }, { o: '4', n: '3' }, { o: '5', n: '4' }, { o: '6', n: '5' }];
      // dataSendToDb.forEach((opt, indexMain) => {
      //   let addT = [];
      //   let addT2 = [];
      //   let addT3 = [];
      //   opt.forEach((itemOpt, index) => {
      //     if (index == 20 && itemOpt != null && itemOpt != '') {
      //       let arrayIds = itemOpt.split(';').map(x => x.trim()).filter(x => x != '');
      //       arrayIds = arrayIds.map((value) => {
      //         const code = relations.find(x => value.includes(x.o));
      //         if (code) {
      //           const r = code.n;
      //           addT.push(...r);
      //           return null;
      //         }
      //         const code2 = relations2.find(x => value.includes(x.o));
      //         if (code2) {
      //           return code2.n;
      //         }
      //         return value;
      //       }).filter(x => x !== null);
      //       arrayIds.sort((a,  b) => a-b);
      //       dataSendToDb[indexMain][index] = arrayIds.join('; ');
      //     }
      //     if (index == 21 && itemOpt != null && itemOpt != '') {
      //       let arrayIds = itemOpt.split(';').map(x => x.trim()).filter(x => x != '');
      //       arrayIds = arrayIds.map(el => (el == '15' ? '16' : el));
      //       arrayIds = Array.from(new Set([...arrayIds.concat(addT)]));
      //       arrayIds.sort((a,  b) => a-b);
      //       const existOption = arrayIds.some(x => ['1'].includes(x));
      //       if (existOption) {
      //         const row = opt[20].split('; ').map(x => x.trim());
      //         row.push(9);
      //         row.sort();
      //         opt[20] = row.join('; ');
      //       }
      //       arrayIds = arrayIds.filter(x => !['1'].includes(x));
      //       arrayIds = arrayIds.map(item => {
      //         let f = move.find(e => e.o === item);
      //         if (f) {
      //           return item.includes('x') ? `${f.n}x` : f.n;
      //         }
      //         return item;
      //       });
      //       arrayIds.sort((a,  b) => a-b);
      //       dataSendToDb[indexMain][index] = arrayIds.join('; ');
      //     }
      //
      //     if (index == 27 && itemOpt != null && itemOpt != '') {
      //       let arrayIds = itemOpt.split(';').map(x => x.trim()).filter(x => x != '');
      //       arrayIds = arrayIds.map((value) => {
      //         const code = relations.find(x => value.includes(x.o));
      //         if (code) {
      //           let r = code.n;
      //           addT2.push(...r);
      //           return null;
      //         }
      //         const code2 = relations2.find(x => value.includes(x.o));
      //         if (code2) {
      //           return code2.n;
      //         }
      //         return value;
      //       }).filter(x => x !== null);
      //       arrayIds.sort();
      //       dataSendToDb[indexMain][index] = arrayIds.join('; ');
      //     }
      //     if (index == 28 && itemOpt != null && itemOpt != '') {
      //       let arrayIds = itemOpt.split(';').map(x => x.trim()).filter(x => x != '');
      //       arrayIds = arrayIds.map(el => (el == '15' ? '16' : el));
      //       arrayIds = Array.from(new Set([...arrayIds.concat(addT2)]));
      //       arrayIds.sort((a,  b) => a-b);
      //       const existOption = arrayIds.some(x => ['1'].includes(x));
      //       if (existOption) {
      //         const row = opt[27].split('; ').map(x => x.trim());
      //         row.push(9);
      //         row.sort();
      //         opt[27] = row.join('; ');
      //       }
      //       arrayIds = arrayIds.filter(x => !['1'].includes(x));
      //       arrayIds = arrayIds.map(item => {
      //         let f = move.find(e => e.o === item);
      //         if (f) {
      //           return item.includes('x') ? `${f.n}x` : f.n;
      //         }
      //         return item;
      //       });
      //       arrayIds.sort((a,  b) => a-b);
      //       dataSendToDb[indexMain][index] = arrayIds.join('; ');
      //     }
      //
      //     if (index == 34 && itemOpt != null && itemOpt != '') {
      //       let arrayIds = itemOpt.split(';').map(x => x.trim()).filter(x => x != '');
      //       arrayIds = arrayIds.map((value) => {
      //         const code = relations.find(x => value.includes(x.o));
      //         if (code) {
      //           let r = code.n;
      //           addT3.push(...r);
      //           return null;
      //         }
      //         const code2 = relations2.find(x => value.includes(x.o));
      //         if (code2) {
      //           return code2.n;
      //         }
      //         return value;
      //       }).filter(x => x !== null);
      //       arrayIds.sort((a,  b) => a-b);
      //       dataSendToDb[indexMain][index] = arrayIds.join('; ');
      //     }
      //     if (index == 35 && itemOpt != null && itemOpt != '') {
      //       let arrayIds = itemOpt.split(';').map(x => x.trim()).filter(x => x != '');
      //       arrayIds = arrayIds.map(el => (el == '15' ? '16' : el));
      //       arrayIds = Array.from(new Set([...arrayIds.concat(addT3)]));
      //       arrayIds.sort();
      //       const existOption = arrayIds.some(x => ['1'].includes(x));
      //       if (existOption) {
      //         const row = opt[34].split('; ').map(x => x.trim());
      //         row.push(9);
      //         row.sort();
      //         opt[34] = row.join('; ');
      //       }
      //       arrayIds = arrayIds.filter(x => !['1'].includes(x));
      //       arrayIds = arrayIds.map(item => {
      //         let f = move.find(e => e.o === item);
      //         if (f) {
      //           return item.includes('x') ? `${f.n}x` : f.n;
      //         }
      //         return item;
      //       });
      //       arrayIds.sort((a,  b) => a-b);
      //       dataSendToDb[indexMain][index] = arrayIds.join('; ');
      //     }
      //   });
      // });

      return await this.insertDataFromExcelFile(dataSendToDb);
    });
  }

  public async getDataExcelFile(): Promise<UploadExcelFileResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      data: await this.getAllData(),
    };
  }

  public async updateFields(body): Promise<ResponseInterface> {
    await this.vehicleRepository.update({ id: body.id }, body);
    return {
      statusCode: 200,
      error: null,
      message: await this.getAllData(),
    };
  }

  public async updateFieldsStatus(body): Promise<ResponseInterface> {
    await this.vehicleRepository.update({ id: body.id }, { status: false });
    return {
      statusCode: 200,
      error: null,
      message: await this.getAllData(),
    };
  }

  async getAllData(): Promise<string | object> {
    return new Promise(async resolve => {
      let data: any = (await this.vehicleRepository.find({ status: true })).map(
        product => {
          return {
            ...product,
            createdAt: moment(product.createdAt).format('DD/MM/YYYY'),
          };
        },
      );
      data = await processPricesStages(data);
      resolve(data);
    });
  }

  async getVehiclesOptions() {
    const query =
      'select id, option_id, name, description, options, type from vehicles_options';
    return await getConnection().query(query);
  }

  async getVehiclesSecondaryOptions() {
    const query = 'select id,type,description,explanation,option_id,engine_code from vehicles_options_two where status=1';
    return await getConnection().query(query);
  }

  async getVehiclesDSG() {
    const query = 'select * from vehicles_dsg';
    return await getConnection().query(query);
  }

  async getVehiclesDSGOptions() {
    const query = 'select * from dsg_options';
    return await getConnection().query(query);
  }

  async getVehiclesDSGSecondaryOptions() {
    const query = 'select * from dsg_options_two';
    return await getConnection().query(query);
  }

  async getCombos() {
    const query = 'select * from vehicles_combo_prices';
    return await getConnection().query(query);
  }

  async generalPrice() {
    const query = 'select * from general_pricing';
    return await getConnection().query(query);
  }

  public async exportDataBase(): Promise<any> {
    return new Promise(async (resolve) => {
// <---Create a new instance of a Workbook class--->
      // <---Get data--->
      const data = await this.getAllData();
      const dataOptions = await this.getVehiclesOptions();
      const dataSecondaryOptions = await this.getVehiclesSecondaryOptions();
      const dataDsg = await this.getVehiclesDSG();
      const dataDsgOption = await this.getVehiclesDSGOptions();
      const dataDsgSecondaryOptions = await this.getVehiclesDSGSecondaryOptions();
      const dataCombos = await this.getCombos();
      const dataPrices = await this.generalPrice();

      const workbook = new excel.Workbook();

      // <---Add Worksheets to the workbook--->
      const worksheet = workbook.addWorksheet('ENGINE SOFT DATABASE');
      const sofOption = workbook.addWorksheet('ENGINE SOFT DB OPTIONS');
      const sofSecOption = workbook.addWorksheet('ENGINE SOFT DB MULTIPLE CHOICE');
      const dsg = workbook.addWorksheet('DSG SOFT DATABASE');
      const dsgOptions = workbook.addWorksheet('DSG SOFT OPTIONS');
      const dsgSecOptions = workbook.addWorksheet('DSG SOFT MULTIPLE CHOICE OPTION');
      const combos = workbook.addWorksheet('ECU + DSG COMBO PRICES');
      const prices = workbook.addWorksheet('GENERAL PRICING');
      await this.proccessSheetOne(worksheet, data);
      await this.processSheetTwo(sofOption, dataOptions);
      await this.processSheetThree(sofSecOption, dataSecondaryOptions);
      await this.processSheetFour(dsg, dataDsg);
      await this.processSheetFive(dsgOptions, dataDsgOption);
      await this.processSheetSix(dsgSecOptions, dataDsgSecondaryOptions);
      await this.processSheetSeven(combos, dataCombos);
      await this.processSheetEight(prices, dataPrices);
      let pathA: any = __dirname;
      pathA = pathA.split('dist');
      const excelFile =
        moment(new Date()).format('DDMMYYYY_HHmm') + '_Excel.xlsx';
      await workbook.write(path.join(pathA[0], 'files', excelFile));
      const name = path.join(pathA[0], 'files', excelFile);
      await this.vehicleFileRepository.save({ name: excelFile, url: name });
      let response;
      setTimeout(async () => {
        response = await this.download(name);
        const buffer = new Buffer(response); // usar nueva versión no deprecada
        resolve(buffer.toString('base64'));
      }, 3000);
    });

  }

  async download(uuid: string): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      fs.readFile(uuid, {}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async downloadDataBase(body, res) {
    let pathA: any = __dirname;
    pathA = pathA.split('dist');
    const ruta = path.join(pathA[0], 'files', body.name);
    return {
      statusCode: 200,
      error: null,
      message: 'blob',
    };
  }

  async proccessSheetOne(worksheet, data): Promise<any> {
    return new Promise(resolve => {
      if (data.length > 0) {
        // <---Fixed titles of worksheet--->
        worksheet
          .cell(1, 1)
          .string('VEHICLE INFORMATION')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 8)
          .string('TVS ENGINEERING CHIPTUNING')
          .style(helper.chipTuning);
        worksheet
          .cell(3, 8)
          .string('STOCK')
          .style(helper.stages);
        worksheet
          .cell(3, 10)
          .string('STAGE I')
          .style(helper.stages);
        worksheet
          .cell(3, 14)
          .string('STAGE II')
          .style(helper.stages);
        worksheet
          .cell(3, 18)
          .string('STAGE II+')
          .style(helper.stages);
        worksheet
          .cell(3, 25)
          .string('STAGE III')
          .style(helper.stages);
        worksheet
          .cell(3, 32)
          .string('STAGE IV')
          .style(helper.stages);

        // <---Write Column Title fields in Excel file--->
        let headingColumnIndex = 1;
        helper.headingColumnNames.forEach(heading => {
          worksheet.row(5).setHeight(30);
          worksheet
            .cell(5, headingColumnIndex++)
            .string(heading)
            .style(helper.headingStyle);
        });

        // <---Write Data in Excel file--->
        let rowIndex = 1;
        let totalColumns = 0;
        let totalRows = 0;
        // @ts-ignore
        data.forEach(record => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            if (columnName.toString() !== 'id'.toString()) {
              worksheet.row(rowIndex + 5).setHeight(30);
              worksheet.column(columnIndex).setWidth(13);
              if (typeof record[columnName] != 'object') {
                if (columnName.toString() === 'engineCode') {
                  if (record[columnName] != null && record[columnName] != '') {
                    const data = JSON.parse(record[columnName]);
                    worksheet
                      .cell(rowIndex + 5, columnIndex)
                      .string(String(data.join(';')))
                      .style(helper.normalDataStyle);
                  }
                } else {
                  worksheet
                    .cell(rowIndex + 5, columnIndex)
                    .string(String(record[columnName]))
                    .style(helper.normalDataStyle);
                }
              } else {
                worksheet
                  .cell(rowIndex + 5, columnIndex)
                  .string(String(''))
                  .style(helper.emptyBlackCell);
              }
              columnIndex++;
            }
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });

        // <---Style for worksheet--->

        worksheet.row(5).freeze();
        worksheet.cell(2, 7).style(helper.rightBorderCell);
        worksheet.cell(4, 7).style(helper.rightBorderCell);
        worksheet.cell(4, 9).style(helper.rightBorderCell);
        worksheet.cell(4, 13).style(helper.rightBorderCell);
        worksheet.cell(4, 17).style(helper.rightBorderCell);
        worksheet.cell(4, 24).style(helper.rightBorderCell);
        worksheet.cell(4, 31).style(helper.rightBorderCell);
        worksheet.cell(4, 41).style(helper.rightBorderCell);
        for (let i = 1; i < 4; i++) {
          worksheet.cell(i, 41).style(helper.rightBorderCell);
        }

        for (let i = 8; i < totalColumns; i++) {
          worksheet.cell(3, i).style(helper.topBorderCell);
          for (let j = 1; j < 5; j++) {
            worksheet.cell(j, i).style(helper.emptyGrayCell);
          }
        }

        for (let i = 1; i <= 7; i++) {
          for (let j = 1; j < totalRows + 5; j++) {
            worksheet.cell(j, i).style(helper.emptyBlueCell);
          }
          // CREA LAS LINEAS NEGRAS QUE SEPARAN LOS STAGES
          for (let j = 1; j <= totalRows; j++) {
            worksheet.cell(j + 4, 7).style(helper.rightBorderCell);
            worksheet.cell(j + 4, 9).style(helper.rightBorderCell);
            worksheet.cell(j + 4, 13).style(helper.rightBorderCell);
            worksheet.cell(j + 4, 17).style(helper.rightBorderCell);
            worksheet.cell(j + 4, 24).style(helper.rightBorderCell);
            worksheet.cell(j + 4, 31).style(helper.rightBorderCell);
            worksheet.cell(j + 4, 38).style(helper.rightBorderCell);
          }
        }
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  async processSheetTwo(worksheet, data: []): Promise<any> {
    return new Promise(async resolve => {
      if (data.length > 0) {
        // <---Fixed titles of worksheet--->
        worksheet
          .cell(1, 1)
          .string('ID')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 2)
          .string('Location availabilty')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 3)
          .string('Explanation')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 4)
          .string('Option')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 5)
          .string('Type')
          .style(helper.vehInfo);

        // <---Write Data in Excel file--->
        let rowIndex = 1;
        let totalColumns = 0;
        let totalRows = 0;
        const arrayTemp: any = await addCellBlanckAndTitle(data, [
          { key: 'location', value: 'Location availabilty' },
          { key: 'engine_software', value: 'Engine software options' },
          { key: 'hardware_modification', value: 'Hardware modifications' },
          { key: 'warning', value: 'Warnings' },
        ]);
        arrayTemp.forEach((record: any) => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            // colunName de la BD
            if (columnName.toString() !== 'id'.toString()) {
              worksheet.row(rowIndex + 1).setHeight(40);
              columnIndex === 1
                ? worksheet.column(columnIndex).setWidth(20)
                : worksheet.column(columnIndex).setWidth(40);
              if (typeof record[columnName] != 'object') {
                if (record.id.toString() === 'DRAW'.toString()) {
                  worksheet
                    .cell(rowIndex + 1, columnIndex)
                    .string(String(record[columnName]))
                    .style(helper.vehInfo);
                } else {
                  worksheet
                    .cell(rowIndex + 1, columnIndex)
                    .string(String(record[columnName]))
                    .style(helper.normalDataStyle)
                    .style(helper.emptyGreenCell);
                }
                if (String(record[columnName]) === ''.toString()) {
                  worksheet
                    .cell(rowIndex + 1, columnIndex)
                    .style(helper.emptyBlackCell);
                }
              } else {
                worksheet
                  .cell(rowIndex + 1, columnIndex)
                  .style(helper.emptyBlackCell);
              }
              columnIndex++;
            }
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  async processSheetThree(worksheet, data: []): Promise<any> {
    return new Promise(async resolve => {
      if (data.length > 0) {
        // <---Fixed titles of worksheet--->
        worksheet
          .cell(1, 1, 1, 5, true)
          .string(
            'NOTE: DO NOT INSERT NEW ROWS, IF YOU WANT TO ADD A NEW RECORD, DO IT AFTER THE LAST ONE. ',
          )
          .style(helper.warningCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(2, 1)
          .string('ID')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 2)
          .string('Option Type')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 3)
          .string('Description')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 4)
          .string('Explanation')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 5)
          .string('option_id')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 6)
          .string('engine_code')
          .style(helper.vehInfo);
        worksheet.row(1).freeze();
        worksheet.row(2).freeze();

        // <---Write Data in Excel file--->
        let rowIndex = 2;
        let totalColumns = 0;
        let totalRows = 0;

        const arrayTemp = [
          {
            id: '',
            type: '',
            description: '',
            explanation: '',
            option_id: '',
            engine_code: '',
          },
        ];
        arrayTemp.concat(data);
        data.forEach((record: any) => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            // colunName de la BD

            worksheet.row(rowIndex + 1).setHeight(40);
            columnIndex === 1
              ? worksheet.column(columnIndex).setWidth(20)
              : worksheet.column(columnIndex).setWidth(40);
            if (typeof record[columnName] != 'object') {
              worksheet
                .cell(rowIndex + 1, columnIndex)
                .string(String(record[columnName]))
                .style(helper.emptyBlueCell)
                .style(helper.normalDataStyle);
            }
            columnIndex++;
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  async processSheetFour(worksheet, data: []): Promise<any> {
    return new Promise(async resolve => {
      // <---Fixed titles of worksheet--->
      if (data.length > 0) {
        worksheet.cell(3, 1).style(helper.emptyRedCell);
        worksheet
          .cell(1, 1, 2, 31, true)
          .string('DSG SOFTWARE')
          .style(helper.emptyRedCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(4, 1)
          .string('DSG Family')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);

        worksheet
          .cell(4, 2)
          .string('Store ALL pre letters here')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);

        worksheet
          .cell(3, 2, 3, 6, true)
          .string('STOCK')
          .style(helper.emptyRedCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(4, 3)
          .string('Max Torque')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 4)
          .string('Location availabilty')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 5)
          .string('Software options')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 6)
          .string('Warnings')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 7)
          .string('Price')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(3, 7, 3, 11, true)
          .string('STAGE I')
          .style(helper.emptyRedCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(4, 8)
          .string('Max Torque')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 9)
          .string('Location availabilty')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 10)
          .string('Software options')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 11)
          .string('Warnings')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 12)
          .string('Price')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(3, 12, 3, 16, true)
          .string('STAGE II')
          .style(helper.emptyRedCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(4, 13)
          .string('Max Torque')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 14)
          .string('Location availabilty')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 15)
          .string('Software options')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 16)
          .string('Warnings')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 17)
          .string('Price')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(3, 17, 3, 21, true)
          .string('STAGE II+')
          .style(helper.emptyRedCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(4, 18)
          .string('Max Torque')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 19)
          .string('Location availabilty')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 20)
          .string('Software options')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 21)
          .string('Warnings')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 22)
          .string('Price')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(3, 22, 3, 26, true)
          .string('STAGE III')
          .style(helper.emptyRedCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(4, 23)
          .string('Max Torque')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 24)
          .string('Location availabilty')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 25)
          .string('Software options')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 26)
          .string('Warnings')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 27)
          .string('Price')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(3, 27, 3, 31, true)
          .string('STAGE IV')
          .style(helper.emptyRedCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(4, 28)
          .string('Max Torque')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 29)
          .string('Location availabilty')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 30)
          .string('Software options')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 31)
          .string('Warnings')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 32)
          .string('Price')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);
        worksheet
          .cell(4, 33)
          .string('status')
          .style(helper.stagesDSG)
          .style(helper.emptyRedCell);

        worksheet.row(1).freeze();
        worksheet.row(2).freeze();
        worksheet.row(3).freeze();
        worksheet
          .row(4)
          .setHeight(35)
          .freeze();

        // <---Write Data in Excel file--->
        let rowIndex = 1;
        const arrayTemp = [
          {
            id: '',
            DSG: '',
            prefijo: '',
            stock_torque: '',
            stock_location: '',
            stock_dsg_software: '',
            stock_dsg_warnings: '',
            stock_prices: '',
            stageOne_torque: '',
            stageOne_location: '',
            stageOne_dsg_software: '',
            stageOne_dsg_warnings: '',
            stageOne_prices: '',
            stageTwo_torque: '',
            stageTwo_location: '',
            stageTwo_dsg_software: '',
            stageTwo_dsg_warnings: '',
            stageTwo_prices: '',
            stageTwoPlus_torque: '',
            stageTwoPlus_location: '',
            stageTwoPlus_dsg_software: '',
            stageTwoPlus_dsg_warnings: '',
            stageTwoPlus_prices: '',
            stageThree_torque: '',
            stageThree_location: '',
            stageThree_dsg_software: '',
            stageThree_dsg_warnings: '',
            stageThree_prices: '',
            stageFour_torque: '',
            stageFour_location: '',
            stageFour_dsg_software: '',
            stageFour_dsg_warnings: '',
            stageFour_prices: '',
            status: '',
          },
        ];

        let totalColumns = 0;
        let totalRows = 0;
        arrayTemp.concat(data);
        data.forEach((record: any) => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            if (columnName.toString() !== 'id'.toString()) {
              // colunName de la BD
              if (typeof record[columnName] != 'object') {
                worksheet
                  .cell(rowIndex + 4, columnIndex)
                  .string(String(record[columnName]))
                  .style(helper.normalDataStyle);
                if (columnName.toString().includes('price', 0)) {
                  worksheet
                    .cell(rowIndex + 4, columnIndex)
                    .style(helper.emptyRedCell);
                }
              } else {
                worksheet
                  .cell(rowIndex + 4, columnIndex)
                  .string(String(''))
                  .style(helper.emptyBlackCell);
              }
              columnIndex++;
            }
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  async processSheetFive(worksheet, data: []): Promise<any> {
    return new Promise(async resolve => {
      if (data.length > 0) {
        // <---Fixed titles of worksheet--->
        worksheet
          .cell(1, 1)
          .string('Option ID')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 2)
          .string('DSG software options')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 3)
          .string('Explanation')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 4)
          .string('Option')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 5)
          .string('Type')
          .style(helper.vehInfo);

        // <---Write Data in Excel file--->
        let rowIndex = 1;
        let totalColumns = 0;
        let totalRows = 0;

        data.forEach((record: any) => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            // colunName de la BD
            if (columnName.toString() !== 'id'.toString()) {
              worksheet.row(rowIndex + 1).setHeight(40);
              columnIndex === 1
                ? worksheet.column(columnIndex).setWidth(20)
                : worksheet.column(columnIndex).setWidth(40);
              if (typeof record[columnName] != 'object') {
                switch (
                  columnIndex // machete para cambiar el orden de la columnas type y option
                  ) {
                  case 4:
                    worksheet
                      .cell(rowIndex + 1, columnIndex + 1)
                      .string(String(record[columnName]))
                      .style(helper.normalDataStyle);
                    break;
                  case 5:
                    worksheet
                      .cell(rowIndex + 1, columnIndex - 1)
                      .string(String(record[columnName]))
                      .style(helper.normalDataStyle);
                    break;

                  default:
                    worksheet
                      .cell(rowIndex + 1, columnIndex)
                      .string(String(record[columnName]))
                      .style(helper.normalDataStyle);
                    break;
                }
              }
              columnIndex++;
            }
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  async processSheetSix(worksheet, data: []): Promise<any> {
    return new Promise(async resolve => {
      if (data.length > 0) {
        // <---Fixed titles of worksheet--->
        worksheet
          .cell(1, 1, 1, 5, true)
          .string(
            'NOTE: DO NOT INSERT NEW ROWS, IF YOU WANT TO ADD A NEW RECORD, DO IT AFTER THE LAST ONE. ',
          )
          .style(helper.warningCell)
          .style(helper.normalDataStyle);
        worksheet
          .cell(2, 1)
          .string('ID')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 2)
          .string('Option Type')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 3)
          .string('Description')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 4)
          .string('Explanation')
          .style(helper.vehInfo);
        worksheet
          .cell(2, 5)
          .string('option_id')
          .style(helper.vehInfo);

        // <---Write Data in Excel file--->
        let rowIndex = 2;
        let totalColumns = 0;
        let totalRows = 0;

        const arrayTemp = [
          {
            id: '',
            type: '',
            description: '',
            explanation: '',
            option_id: '',
          },
        ];
        arrayTemp.concat(data);
        data.forEach((record: any) => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            // colunName de la BD
            worksheet.row(rowIndex + 1).setHeight(40);
            columnIndex === 1
              ? worksheet.column(columnIndex).setWidth(20)
              : worksheet.column(columnIndex).setWidth(40);
            if (typeof record[columnName] != 'object') {
              if (columnIndex === 2) {
                worksheet
                  .cell(rowIndex + 1, Number(columnIndex) + 3)
                  .string(String(record[columnName]))
                  .style(helper.normalDataStyle);
              }
              if (columnIndex > 2) {
                worksheet
                  .cell(rowIndex + 1, Number(columnIndex) - 1)
                  .string(String(record[columnName]))
                  .style(helper.normalDataStyle);
              }
              if (columnIndex < 2) {
                worksheet
                  .cell(rowIndex + 1, columnIndex)
                  .string(String(record[columnName]))
                  .style(helper.normalDataStyle);
              }
              // worksheet
              //     .cell(rowIndex + 1, columnIndex)
              //     .string(String(record[columnName]))
              //     .style(helper.normalDataStyle);
            }
            columnIndex++;
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  async processSheetSeven(worksheet, data: []): Promise<any> {
    return new Promise(async resolve => {
      if (data.length > 0) {
        // <---Fixed titles of worksheet--->
        worksheet.cell(1, 1, 2, 1, true).style(helper.emptyCombiCell);
        worksheet
          .cell(1, 2, 1, 6, true)
          .style(helper.emptyCombiCell)
          .string('ECU + DSG SOFTWARE COMBO PACKAGE');
        worksheet
          .cell(2, 2)
          .string('ECU STAGE I DSG STAGE I')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(2, 3)
          .string('ECU STAGE II/II+  DSG STAGE II+')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(2, 4)
          .string('ECU STAGE II/II+  DSG STAGE III')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(2, 5)
          .string('ECU STAGE III   DSG STAGE III/IV')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(2, 6)
          .string('ECU STAGE IV   DSG STAGE III/IV')
          .style(helper.emptyCombiCell);

        // second titles
        worksheet
          .cell(3, 1)
          .string('DSG Family')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(3, 2)
          .string('Price')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(3, 3)
          .string('Price')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(3, 4)
          .string('Price')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(3, 5)
          .string('Price')
          .style(helper.emptyCombiCell);
        worksheet
          .cell(3, 6)
          .string('Price')
          .style(helper.emptyCombiCell);

        // <---Write Data in Excel file--->
        let rowIndex = 3;

        let totalColumns = 0;
        let totalRows = 0;
        data.forEach((record: any) => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            if (columnName.toString() !== 'id'.toString()) {
              // colunName de la BD
              worksheet.row(rowIndex + 1).setHeight(40);
              columnIndex === 1
                ? worksheet.column(columnIndex).setWidth(20)
                : worksheet.column(columnIndex).setWidth(40);
              if (typeof record[columnName] != 'object') {
                worksheet
                  .cell(rowIndex + 1, columnIndex)
                  .string(String(record[columnName]))
                  .style(helper.normalDataStyle);
              }
              columnIndex++;
            }
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  async processSheetEight(worksheet, data: []): Promise<any> {
    return new Promise(async resolve => {
      if (data.length > 0) {
        // <---Fixed titles of worksheet--->
        worksheet
          .cell(1, 1)
          .string('ID')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 2)
          .string('Type')
          .style(helper.vehInfo);
        worksheet
          .cell(1, 3)
          .string('Price')
          .style(helper.vehInfo);

        // <---Write Data in Excel file--->
        let rowIndex = 1;
        let totalColumns = 0;
        let totalRows = 0;
        data.forEach((record: any) => {
          let columnIndex = 1;
          Object.keys(record).forEach(columnName => {
            // colunName de la BD
            worksheet.row(rowIndex + 1).setHeight(40);
            columnIndex === 1
              ? worksheet.column(columnIndex).setWidth(20)
              : worksheet.column(columnIndex).setWidth(40);
            if (typeof record[columnName] != 'object') {
              if (record.id.toString() === 'DRAW'.toString()) {
                worksheet
                  .cell(rowIndex + 1, columnIndex)
                  .string(String(record[columnName]))
                  .style(helper.vehInfo);
              } else {
                worksheet
                  .cell(rowIndex + 1, columnIndex)
                  .string(String(record[columnName]))
                  .style(helper.normalDataStyle);
              }
            }
            columnIndex++;
            totalColumns = columnIndex;
          });
          rowIndex++;
          totalRows = rowIndex;
        });
        resolve(worksheet);
      } else {
        resolve(worksheet);
      }
    });
  }

  public async relations(id: number): Promise<ResponseInterface> {
    const data = await this.vehicleRepository.findOne(id);
    const stageOneOneIds =
      data.stageOneOne != null ? data.stageOneOne.split(';') : null;
    const stageTwoOneIds =
      data.stageTwoOne != null ? data.stageTwoOne.split(';') : null;
    const stageTwoPlusOneIds =
      data.stageTwoPlusOne != null ? data.stageTwoPlusOne.split(';') : null;
    const stageTwoPlusTwoIds =
      data.stageTwoPlusTwo != null ? data.stageTwoPlusTwo.split(';') : null;
    const stageTwoPlusThreeIds =
      data.stageTwoPlusThree != null ? data.stageTwoPlusThree.split(';') : null;
    const stageTwoPlusFourIds = data.stageTwoPlusFour
      ? data.stageTwoPlusFour.split(';')
      : null;
    const stageThreeOneIds = data.stageThreeOne
      ? data.stageThreeOne.split(';')
      : null;
    const stageThreeTwoIds = data.stageThreeTwo
      ? data.stageThreeTwo.split(';')
      : null;
    const stageThreeThreeIds = data.stageThreeThree
      ? data.stageThreeThree.split(';')
      : null;
    const stageThreeFourIds =
      data.stageThreeFour != null ? data.stageThreeFour.split(';') : null;
    const stageFourOneIds =
      data.stageFourOne != null ? data.stageFourOne.split(';') : null;
    const stageFourTwoIds =
      data.stageFourTwo != null ? data.stageFourTwo.split(';') : null;
    const stageFourThreeIds =
      data.stageFourThree != null ? data.stageFourThree.split(';') : null;
    const stageFourFourIds =
      data.stageFourFour != null ? data.stageFourFour.split(';') : null;

    return {
      statusCode: 200,
      error: null,
      message: await this.createArrayOptions(
        stageOneOneIds,
        stageTwoOneIds,
        stageTwoPlusOneIds,
        stageTwoPlusTwoIds,
        stageTwoPlusThreeIds,
        stageTwoPlusFourIds,
        stageThreeOneIds,
        stageThreeTwoIds,
        stageThreeThreeIds,
        stageThreeFourIds,
        stageFourTwoIds,
        stageFourOneIds,
        stageFourThreeIds,
        stageFourFourIds,
      ),
    };
  }

  async findRelation(ids, type) {
    return await this.vehicleOptionsRepository.find({
      where: {
        optionId: In(ids),
        type: type.toString(),
      },
    });
  }

  async createArrayOptions(
    stageOneOneIds,
    stageTwoOneIds,
    stageTwoPlusOneIds,
    stageTwoPlusTwoIds,
    stageTwoPlusThreeIds,
    stageTwoPlusFourIds,
    stageThreeOneIds,
    stageThreeTwoIds,
    stageThreeThreeIds,
    stageThreeFourIds,
    stageFourTwoIds,
    stageFourOneIds,
    stageFourThreeIds,
    stageFourFourIds,
  ) {
    return new Promise(async resolve => {
      const arrayOptiones = [];

      if (stageOneOneIds != null) {
        arrayOptiones.push({
          stageOneOne: await this.findRelation(stageOneOneIds, 'location'),
        });
      } else {
        arrayOptiones.push({ stageOneOne: [] });
      }
      if (stageTwoOneIds != null) {
        arrayOptiones.push({
          stageTwoOne: await this.findRelation(stageTwoOneIds, 'location'),
        });
      } else {
        arrayOptiones.push({ stageTwoOne: [] });
      }
      if (stageTwoPlusOneIds != null) {
        arrayOptiones.push({
          stageTwoPlusOne: await this.findRelation(
            stageTwoPlusOneIds,
            'location',
          ),
        });
      } else {
        arrayOptiones.push({ stageTwoPlusOne: [] });
      }
      if (stageTwoPlusTwoIds != null) {
        arrayOptiones.push({
          stageTwoPlusTwo: await this.findRelation(
            stageTwoPlusTwoIds,
            'engine_software',
          ),
        });
      } else {
        arrayOptiones.push({ stageTwoPlusTwo: [] });
      }

      if (stageTwoPlusThreeIds != null) {
        arrayOptiones.push({
          stageTwoPlusThree: await this.findRelation(
            stageTwoPlusThreeIds,
            'hardware_modification',
          ),
        });
      } else {
        arrayOptiones.push({ stageTwoPlusThree: [] });
      }

      if (stageTwoPlusFourIds != null) {
        arrayOptiones.push({
          stageTwoPlusFour: await this.findRelation(
            stageTwoPlusFourIds,
            'warning',
          ),
        });
      } else {
        arrayOptiones.push({ stageTwoPlusFour: [] });
      }
      if (stageThreeOneIds != null) {
        arrayOptiones.push({
          stageThreeOne: await this.findRelation(stageThreeOneIds, 'location'),
        });
      } else {
        arrayOptiones.push({ stageThreeOne: [] });
      }
      if (stageThreeTwoIds != null) {
        arrayOptiones.push({
          stageThreeTwo: await this.findRelation(
            stageThreeTwoIds,
            'engine_software',
          ),
        });
      } else {
        arrayOptiones.push({ stageThreeTwo: [] });
      }
      if (stageThreeThreeIds != null) {
        arrayOptiones.push({
          stageThreeThree: await this.findRelation(
            stageThreeThreeIds,
            'hardware_modification',
          ),
        });
      } else {
        arrayOptiones.push({ stageThreeThree: [] });
      }
      if (stageThreeFourIds != null) {
        arrayOptiones.push({
          stageThreeFour: await this.findRelation(stageThreeFourIds, 'warning'),
        });
      } else {
        arrayOptiones.push({ stageThreeFour: [] });
      }
      if (stageFourOneIds != null) {
        arrayOptiones.push({
          stageFourOne: await this.findRelation(stageFourOneIds, 'location'),
        });
      } else {
        arrayOptiones.push({ stageFourOne: [] });
      }
      if (stageFourTwoIds != null) {
        arrayOptiones.push({
          stageFourTwo: await this.findRelation(
            stageFourTwoIds,
            'engine_software',
          ),
        });
      } else {
        arrayOptiones.push({ stageFourTwo: [] });
      }
      if (stageFourThreeIds != null) {
        arrayOptiones.push({
          stageFourThree: await this.findRelation(
            stageFourThreeIds,
            'hardware_modification',
          ),
        });
      } else {
        arrayOptiones.push({ stageFourThree: [] });
      }
      if (stageFourFourIds != null) {
        arrayOptiones.push({
          stageFourFour: await this.findRelation(stageFourFourIds, 'warning'),
        });
      } else {
        arrayOptiones.push({ stageFourFour: [] });
      }
      resolve(arrayOptiones);
    });
  }

  async data() {
    return this.vehicleFileRepository.find();
  }
}
