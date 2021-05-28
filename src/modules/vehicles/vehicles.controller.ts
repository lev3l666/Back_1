import { Body, Controller, Get, Param, ParseIntPipe, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from '../../utils/file-upload.utils';
import { ResponseInterface, UploadExcelFileResponseInterface } from '../../dto-interface/interface';
import { VehiclesService } from './vehicles.service';
import { VehiclesDsgService } from '../vehicles-dsg/vehicles-dsg.service';
import { VehiclesPricesService } from '../vehicles-prices/vehicles-prices.service';
import { VehiclesOptionsService } from '../vehicles-options/vehicles-options.service';
import { Combo_pricesService } from '../combo_prices/combo_prices.service';
import { VehiclesOptionsTwoService } from '../vehicles-options-two/vehicles-options-two.service';
import { DsgOptionsService } from '../vehicles-dsg-options/dsg-options.service';
import { DsgOptionsTwoService } from '../vehicles-dsg-options-two/dsg-options-two.service';
import { clearAllTablesVehicles } from './helper';

// tslint:disable-next-line:no-var-requires
const readXlsxFile = require('read-excel-file/node');
// tslint:disable-next-line:no-var-requires
const fs = require('fs');

// @UseGuards(AuthGuard('jwt'))
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly uploadExcelFileService: VehiclesService,
              private readonly uploadExcelSheetCombos: VehiclesDsgService,
              private readonly uploadExcelSheetPrices: VehiclesPricesService,
              private readonly uploadExcelSheetEngineOptions: VehiclesOptionsService,
              private readonly uploadExcelSheetComboPrices: Combo_pricesService,
              private readonly uploadExcelSheetOptionsTwo: VehiclesOptionsTwoService,
              private readonly uploadExcelSheetDsgOptions: DsgOptionsService,
              private readonly uploadExcelSheetDsgOptionsTwo: DsgOptionsTwoService,
  ) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: editFileName,
    }),
  }))
  public async setDataFromExcelFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    // first clear all table relations vehicles
    await clearAllTablesVehicles();

    const resp1 = await this.uploadExcelFileService.readExcelFile(response.filename); // ENGINE SOFT DATABASE
    const resp2 = await this.uploadExcelSheetEngineOptions.readExcelFile(response.filename); // ENGINE SOFT DB OPTIONS
    const resp3 = await this.uploadExcelSheetOptionsTwo.readExcelFile(response.filename); // ENGINE SOFT DB SEC. OPTIONS
    const resp4 = await this.uploadExcelSheetCombos.readExcelFile(response.filename); // DSG SOFT DATABASE
    const resp5 = await this.uploadExcelSheetDsgOptions.readExcelFile(response.filename); // DSG SOFT OPTIONS
    const resp6 = await this.uploadExcelSheetDsgOptionsTwo.readExcelFile(response.filename); // DSG SOFT SEC. OPTIONS
    const resp7 = await this.uploadExcelSheetComboPrices.readExcelFile(response.filename); // ECU + DSG COMBO PRICES
    const resp8 = await this.uploadExcelSheetPrices.readExcelFile(response.filename); // GENERAL PRICING

    if ((resp1.length === 0) && (resp2.length === 0) && (resp3.length === 0)
      && (resp4.length === 0) && (resp5.length === 0) && (resp6.length === 0) && (resp7.length === 0) && (resp8.length === 0)) {

      return {
        statusCode: 200,
        error: null,
        message: {
          message: 'Success',
        },
      };
    } else {
      const arrayError = Array.prototype.concat(resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8);
      return {
        statusCode: 300,
        error: null,
        message: {
          message: 'Error, not added: ' + arrayError,
        },
      };
    }

  }

  @Get()
  public async getDataExcelFIle(): Promise<UploadExcelFileResponseInterface> {
    return await this.uploadExcelFileService.getDataExcelFile();
  }

  @Post('updateFields')
  public async updateFields(@Body() body): Promise<ResponseInterface> {
    return await this.uploadExcelFileService.updateFields(body);
  }

  @Post('updateFieldsStatus')
  public async updateFieldsStatus(@Body() body): Promise<ResponseInterface> {
    return await this.uploadExcelFileService.updateFieldsStatus(body);
  }

  @Get('export-data')
  public async exportDataBase(@Body() body): Promise<any> {
    return await this.uploadExcelFileService.exportDataBase();
  }

  @Post('download-excel')
  public async downloadDataBase(@Body() body, @Res() res): Promise<any> {
    return await this.uploadExcelFileService.downloadDataBase(body, res);
  }

  @Get('relations/:id')
  public async relations(@Param('id', ParseIntPipe) id: number): Promise<ResponseInterface> {
    return await this.uploadExcelFileService.relations(id);
  }

  @Post('data')
  public async data(@Body() body): Promise<ResponseInterface> {
    return await body;
  }

}
