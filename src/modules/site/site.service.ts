import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiclesEntity } from '../vehicles/vehicles.entity';
import { getConnection, getRepository, Like, Repository } from 'typeorm';
import { ResponseInterface } from '../../dto-interface/interface';
import { VehiclesDSGCombosEntity } from '../vehicles-dsg/vehicles-dsg-combos.entity';
import { ComboPricesEntity } from '../combo_prices/combo_prices.entity';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';
import { sendEmail, sendWhatsappMessage } from '../../services';
import { User } from '../user/user.entity';
import { generateRandomInteger, processPricesStages } from '../../services/helpers/utilities';
import { Configuration } from '../../config/config.keys';
import { OrderSoftwareEntity } from '../order-software/order-software.entity';
import { SocketService } from '../socket/socket.service';
import { OrderCustomSoftwareHistoryEntity } from '../order-custom-software/order-custom-software-history.entity';
import { findByVIN } from '../../services/vin/vin';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(VehiclesEntity)
    private readonly vehicleRepository: Repository<VehiclesEntity>,
    @InjectRepository(VehiclesDSGCombosEntity)
    private readonly dsgRepository: Repository<VehiclesDSGCombosEntity>,
    @InjectRepository(ComboPricesEntity)
    private readonly comboRepository: Repository<ComboPricesEntity>,
    @InjectRepository(OrderSoftwareEntity)
    private readonly orderSotwareRepository: Repository<OrderSoftwareEntity>,
    @InjectRepository(OrderCustomSoftwareEntity)
    private readonly customSoftwareEntityRepository: Repository<OrderCustomSoftwareEntity>,
    @InjectRepository(OrderCustomSoftwareHistoryEntity)
    private readonly answerEntityRepository: Repository<OrderCustomSoftwareHistoryEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly socketService: SocketService,
  ) {
  }

  async index(body): Promise<ResponseInterface> {
    const data = await this.vehicleRepository.find({
      where: {
        make: body.brand,
        model: body.model,
        generation: body.generation,
        engine: body.engine,
      },
    });
    const tuning = await this.filterOptions(data);
    const dsg = await this.getDsg(tuning);
    return {
      statusCode: 200,
      error: null,
      message: {
        tuning: await processPricesStages(tuning),
        dsg: await this.dsgOptions(dsg),
        combos: await this.getCombos(dsg),
      },
    };

  }

  async brands(): Promise<ResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      message: await this.vehicleRepository.createQueryBuilder()
        .select('make')
        .groupBy('make')
        .getRawMany(),
    };
  }

  async filterModel(body): Promise<ResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      message: await getRepository(VehiclesEntity)
        .createQueryBuilder('vehicles')
        .select('id, model, make')
        .where('vehicles.make = :mar', { mar: body.brand })
        .groupBy('model')
        .getRawMany(),
    };
  }

  async filterGeneration(body): Promise<ResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      message: await getRepository(VehiclesEntity)
        .createQueryBuilder('vehicles')
        .select('generation')
        .where('vehicles.make = :mar', { mar: body.brand })
        .andWhere('vehicles.model = :mod', { mod: body.model })
        .groupBy('generation')
        .getRawMany(),
    };
  }

  async filterEngine(body): Promise<ResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      message: await getRepository(VehiclesEntity)
        .createQueryBuilder('vehicles')
        .select('engine')
        .where('vehicles.make = :mar', { mar: body.brand })
        .andWhere('vehicles.model = :mod', { mod: body.model })
        .andWhere('vehicles.generation = :gene', { gene: body.generation })
        .groupBy('engine')
        .getRawMany(),
    };
  }

  async filterOptions(data): Promise<any> {
    for (const item of data) {
      // ---------------------------------------------------------------------------------------------------------------- STAGE ONE
      if (item.stageOneOne != null && item.stageOneOne !== '' && item.stageOneOne.toString() !== 'CONTACT') {
        const it = item.stageOneOne.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageOneOne = await getConnection().query('SELECT * FROM vehicles_options where type = \'location\' and option_id in (' + it + ')');
        if (item.stageOneOne.length > 0) {
          for (let ele of item.stageOneOne) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('location', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }
      // ---------------------------------------------------------------------------------------------------------------- STAGE TWO
      if (item.stageTwoOne != null && item.stageTwoOne !== '' && item.stageTwoOne.toString() !== 'CONTACT') {
        const it = item.stageTwoOne.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageTwoOne = await getConnection().query('SELECT * FROM vehicles_options where type = \'location\' and option_id in (' + it + ')');
        if (item.stageTwoOne.length > 0) {
          for (let ele of item.stageTwoOne) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('location', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }
      // ---------------------------------------------------------------------------------------------------------------- STAGE TWO PLUS
      if (item.stageTwoPlusOne != null && item.stageTwoPlusOne !== '' && item.stageTwoPlusOne.toString() !== 'CONTACT') {
        const it = item.stageTwoPlusOne.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageTwoPlusOne = await getConnection().query('SELECT * FROM vehicles_options where type = \'location\' and option_id in (' + it + ')');
        if (item.stageTwoPlusOne.length > 0) {
          for (let ele of item.stageTwoPlusOne) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('location', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageTwoPlusTwo != null && item.stageTwoPlusTwo !== '' && item.stageTwoPlusTwo.toString() !== 'CONTACT') {
        const it = item.stageTwoPlusTwo.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageTwoPlusTwo = await getConnection().query('SELECT * FROM vehicles_options where type = \'engine_software\' and option_id in (' + it + ')');
        if (item.stageTwoPlusTwo.length > 0) {
          for (let ele of item.stageTwoPlusTwo) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('engine_software', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageTwoPlusThree != null && item.stageTwoPlusThree !== '' && item.stageTwoPlusThree.toString() !== 'CONTACT') {
        const it = item.stageTwoPlusThree.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageTwoPlusThree = await getConnection().query('SELECT * FROM vehicles_options where type = \'hardware_modification\' and option_id in (' + it + ')');
        if (item.stageTwoPlusThree.length > 0) {
          for (let ele of item.stageTwoPlusThree) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('hardware_modification', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageTwoPlusFour != null && item.stageTwoPlusFour !== '' && item.stageTwoPlusFour.toString() !== 'CONTACT') {
        const it = item.stageTwoPlusFour.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageTwoPlusFour = await getConnection().query('SELECT * FROM vehicles_options where type = \'warning\' and option_id in (' + it + ')');
        if (item.stageTwoPlusFour.length > 0) {
          for (let ele of item.stageTwoPlusFour) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('warning', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }
      // ---------------------------------------------------------------------------------------------------------------- stage three
      if (item.stageThreeOne != null && item.stageThreeOne !== '' && item.stageThreeOne.toString() !== 'CONTACT') {
        const it = item.stageThreeOne.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageThreeOne = await getConnection().query('SELECT * FROM vehicles_options where type = \'location\' and option_id in (' + it + ')');
        if (item.stageThreeOne.length > 0) {
          for (let ele of item.stageThreeOne) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('location', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageThreeTwo != null && item.stageThreeTwo !== '' && item.stageThreeTwo.toString() !== 'CONTACT') {
        const it = item.stageThreeTwo.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageThreeTwo = await getConnection().query('SELECT * FROM vehicles_options where type = \'engine_software\' and option_id in (' + it + ')');
        if (item.stageThreeTwo.length > 0) {
          for (let ele of item.stageThreeTwo) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('engine_software', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageThreeThree != null && item.stageThreeThree !== '' && item.stageThreeThree.toString() !== 'CONTACT') {
        const it = item.stageThreeThree.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageThreeThree = await getConnection().query('SELECT * FROM vehicles_options where type = \'hardware_modification\' and option_id in (' + it + ')');
        if (item.stageThreeThree.length > 0) {
          for (let ele of item.stageThreeThree) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('hardware_modification', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageThreeFour != null && item.stageThreeFour !== '' && item.stageThreeFour.toString() !== 'CONTACT') {
        const it = item.stageThreeFour.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageThreeFour = await getConnection().query('SELECT * FROM vehicles_options where type = \'warning\' and option_id in (' + it + ')');
        if (item.stageThreeFour.length > 0) {
          for (let ele of item.stageThreeFour) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('warning', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      // ---------------------------------------------------------------------------------------------------------------- STAGE FOUR

      if (item.stageFourOne != null && item.stageFourOne !== '' && item.stageFourOne.toString() !== 'CONTACT') {
        const it = item.stageFourOne.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageFourOne = await getConnection().query('SELECT * FROM vehicles_options where type = \'location\' and option_id in (' + it + ')');
        if (item.stageFourOne.length > 0) {
          for (let ele of item.stageFourOne) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('location', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageFourTwo != null && item.stageFourTwo !== '' && item.stageFourTwo.toString() !== 'CONTACT') {
        const it = item.stageFourTwo.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageFourTwo = await getConnection().query('SELECT * FROM vehicles_options where type = \'engine_software\' and option_id in (' + it + ')');
        if (item.stageFourTwo.length > 0) {
          for (let ele of item.stageFourTwo) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('engine_software', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageFourThree != null && item.stageFourThree !== '' && item.stageFourThree.toString() !== 'CONTACT') {
        const it = item.stageFourThree.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageFourThree = await getConnection().query('SELECT * FROM vehicles_options where type = \'hardware_modification\' and option_id in (' + it + ')');
        if (item.stageFourThree.length > 0) {
          for (let ele of item.stageFourThree) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('hardware_modification', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }

      if (item.stageFourFour != null && item.stageFourFour !== '' && item.stageFourFour.toString() !== 'CONTACT') {
        const it = item.stageFourFour.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        item.stageFourFour = await getConnection().query('SELECT * FROM vehicles_options where type = \'warning\' and option_id in (' + it + ')');
        if (item.stageFourFour.length > 0) {
          for (let ele of item.stageFourFour) {
            ele.options = await this.getSecondaryOptionsSoftwareHardware('warning', ele.option_id);
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };
          }
        }
      }
    }
    return data;
  }

  containRequiredOption(item) {
    return new Promise(resolve => {
      const arrayRequired = [];
      const arrayRecomended = [];
      for (let i = 0; i <= item.length - 1; i++) {
        if (item[i].includes('x') || item[i].includes('X')) {
          item[i] = item[i].toString().replace('x', '');
          item[i] = item[i].toString().replace('X', '');
          arrayRequired.push(item[i].trim()); //INCLUDED OPTIONS
        }
        if (item[i].includes('r')) {
          item[i] = item[i].toString().replace('r', '');
          arrayRecomended.push(item[i].trim());
        }
      }
      resolve({ recomended: arrayRecomended, required: arrayRequired });
    });
  }

  addFieldToItem(item, arrayRequired, arrayRecomended) {
    return new Promise(resolve => {
      item.required = !!(arrayRequired.includes(item.option_id.toString()));
      item.recomended = !!(arrayRecomended.includes(item.option_id.toString()));
      item.checked = false;
      resolve(item);
    });
  }

  async getSecondaryOptionsSoftwareHardware(type, id) {
    return new Promise(async resolve => {
      const data = await getConnection().query(`SELECT * FROM vehicles_options_two where status=1 and type = '${type}' and option_id = ${id}`);
      if (data.length > 0) {
        resolve(data);
      } else {
        resolve([]);
      }
    });
  }

  async getDsg(data) {
    return new Promise(async resolve => {
      const arrayData: any = [];
      for (const item of data) {
        const arrayDsg = item.dsg.split(';');
        let info = null;
        for (const value of arrayDsg) {
          info = await this.dsgRepository.findOne({
            where: [{ DSG: Like('%' + value + '%') }],
          });
          if (info != null) {
            arrayData.push(info);
          }
        }
      }
      resolve(arrayData);
    });
  }

  async getCombos(data) {
    return new Promise(async resolve => {
      const arrayData: any = [];
      for (const item of data) {
        const info = await this.comboRepository.findOne({ where: { dsg: item.DSG } });
        if (info != null) {
          arrayData.push(info);
        }
      }
      resolve(arrayData);
    });
  }

  async dsgOptions(data) {
    for (const item of data) {
      // ========================== STOCK
      // TORQUE
      if (item.stockLocation != null && item.stockLocation !== '' && item.stockLocation != 'CONTACT') {
        item.stockLocation.replace('X', '');
        item.stockLocation.replace('x', '');
        const it = item.stockLocation.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'location\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stockLocation = await getConnection().query(queryOptions);
        }
      }
      // DSG SOFTWARE OPTION
      if (item.stockDsgSoftware != null && item.stockDsgSoftware !== '' && item.stockDsgSoftware != 'CONTACT') {
        item.stockDsgSoftware.replace('X', '');
        item.stockDsgSoftware.replace('x', '');
        const it = item.stockDsgSoftware.split(';');
        const queryOptions = 'SELECT * FROM dsg_options where id in (' + it + ')';
        if (queryOptions != null) {
          item.stockDsgSoftware = await getConnection().query(queryOptions);
        }
      }
      // WARNING
      if (item.stockDsgWarnings != null && item.stockDsgWarnings !== '' && item.stockDsgWarnings != 'CONTACT') {
        item.stockDsgWarnings.replace('X', '');
        item.stockDsgWarnings.replace('x', '');
        const it = item.stockDsgWarnings.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'warning\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stockDsgWarnings = await getConnection().query(queryOptions);
        }
      }

      // ========================== STAGE ONE
      // LOCATION AVAILABILTY
      if (item.stageOneLocation != null && item.stageOneLocation !== '' && item.stageOneLocation != 'CONTACT') {
        item.stageOneLocation.replace('X', '');
        item.stageOneLocation.replace('x', '');
        const it = item.stageOneLocation.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'location\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageOneLocation = await getConnection().query(queryOptions);
        }
      }
      // DSG SOFTWARE OPTION
      if (item.stageOneDsgSoftware != null && item.stageOneDsgSoftware !== '' && item.stageOneDsgSoftware != 'CONTACT') {
        item.stageOneDsgSoftware.replace('X', '');
        item.stageOneDsgSoftware.replace('x', '');
        const it = item.stageOneDsgSoftware.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        const queryOptions = 'SELECT * FROM dsg_options where id in (' + it + ')';
        if (queryOptions != null) {
          item.stageOneDsgSoftware = await getConnection().query(queryOptions);

          for (let ele of item.stageOneDsgSoftware) {
            if (ele.options == 'Multiple') {
              ele.options = await this.getSecondaryOptionsDSG(ele.option_id);
            }
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };        
            
          }  

        }
      }
      // WARNING
      if (item.stageOneDsgWarnings != null && item.stageOneDsgWarnings !== '' && item.stageOneDsgWarnings != 'CONTACT') {
        item.stageOneDsgWarnings.replace('X', '');
        item.stageOneDsgWarnings.replace('x', '');
        const it = item.stageOneDsgWarnings.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'warning\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageOneDsgWarnings = await getConnection().query(queryOptions);
        }
      }
      // ========================== STAGE TWO
      // LOCATION AVAILABILTY
      if (item.stageTwoLocation != null && item.stageTwoLocation !== '' && item.stageTwoLocation != 'CONTACT') {
        item.stageTwoLocation.replace('X', '');
        item.stageTwoLocation.replace('x', '');
        const it = item.stageTwoLocation.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'location\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageTwoLocation = await getConnection().query(queryOptions);
        }
      }
      // DSG SOFTWARE OPTION
      if (item.stageTwoDsgSoftware != null && item.stageTwoDsgSoftware !== '' && item.stageTwoDsgSoftware != 'CONTACT') {
        item.stageTwoDsgSoftware.replace('X', '');
        item.stageTwoDsgSoftware.replace('x', '');
        const it = item.stageTwoDsgSoftware.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        const queryOptions = 'SELECT * FROM dsg_options where id in (' + it + ')';
        if (queryOptions != null) {
          item.stageTwoDsgSoftware = await getConnection().query(queryOptions);
          for (let ele of item.stageTwoDsgSoftware) {
            if (ele.options == 'Multiple') {
              ele.options = await this.getSecondaryOptionsDSG(ele.option_id);
            }
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };        
            
          }  
        }
      }
      // WARNING
      if (item.stageTwoDsgWarnings != null && item.stageTwoDsgWarnings !== '' && item.stageTwoDsgWarnings != 'CONTACT') {
        item.stageTwoDsgWarnings.replace('X', '');
        item.stageTwoDsgWarnings.replace('x', '');
        const it = item.stageTwoDsgWarnings.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'warning\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageTwoDsgWarnings = await getConnection().query(queryOptions);
        }
      }

      // ========================== STAGE TWO PLUS
      // LOCATION AVAILABILTY
      if (item.stageTwoPlusLocation != null && item.stageTwoPlusLocation !== '' && item.stageTwoPlusLocation != 'CONTACT') {
        item.stageTwoPlusLocation.replace('X', '');
        item.stageTwoPlusLocation.replace('x', '');
        const it = item.stageTwoPlusLocation.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'location\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageTwoPlusLocation = await getConnection().query(queryOptions);
        }
      }
      // DSG SOFTWARE OPTION
      if (item.stageTwoPlusDsgSoftware != null && item.stageTwoPlusDsgSoftware !== '' && item.stageTwoPlusDsgSoftware != 'CONTACT') {
        item.stageTwoPlusDsgSoftware.replace('X', '');
        item.stageTwoPlusDsgSoftware.replace('x', '');
        const it = item.stageTwoPlusDsgSoftware.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        const queryOptions = 'SELECT * FROM dsg_options where id in (' + it + ')';
        if (queryOptions != null) {
          item.stageTwoPlusDsgSoftware = await getConnection().query(queryOptions);

          for (let ele of item.stageTwoPlusDsgSoftware) {
            if (ele.options == 'Multiple') {
              ele.options = await this.getSecondaryOptionsDSG(ele.option_id);
            }
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };      
            
          }        
          
        }
      }
      // WARNING
      if (item.stageTwoPlusDsgWarnings != null && item.stageTwoPlusDsgWarnings !== '' && item.stageTwoPlusDsgWarnings != 'CONTACT') {
        item.stageTwoPlusDsgWarnings.replace('X', '');
        item.stageTwoPlusDsgWarnings.replace('x', '');
        const it = item.stageTwoPlusDsgWarnings.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'warning\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageTwoPlusDsgWarnings = await getConnection().query(queryOptions);
        }
      }

      // ========================== STAGE 3
      // LOCATION AVAILABILTY
      if (item.stageThreeLocation != null && item.stageThreeLocation !== '' && item.stageThreeLocation != 'CONTACT') {
        item.stageThreeLocation.replace('X', '');
        item.stageThreeLocation.replace('x', '');
        const it = item.stageThreeLocation.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'location\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageThreeLocation = await getConnection().query(queryOptions);
        }
      }
      // DSG SOFTWARE OPTION
      if (item.stageThreeDsgSoftware != null && item.stageThreeDsgSoftware !== '' && item.stageThreeDsgSoftware != 'CONTACT') {
        item.stageThreeDsgSoftware.replace('X', '');
        item.stageThreeDsgSoftware.replace('x', '');
        const it = item.stageThreeDsgSoftware.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        const queryOptions = 'SELECT * FROM dsg_options where id in (' + it + ')';
        if (queryOptions != null) {
          item.stageThreeDsgSoftware = await getConnection().query(queryOptions);
          for (let ele of item.stageThreeDsgSoftware) {
            if (ele.options == 'Multiple') {
              ele.options = await this.getSecondaryOptionsDSG(ele.option_id);
            }
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };        
            
          }  
        }
      }
      // WARNING
      if (item.stageThreeDsgWarnings != null && item.stageThreeDsgWarnings !== '' && item.stageThreeDsgWarnings != 'CONTACT') {
        item.stageThreeDsgWarnings.replace('X', '');
        item.stageThreeDsgWarnings.replace('x', '');
        const it = item.stageThreeDsgWarnings.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'warning\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageThreeDsgWarnings = await getConnection().query(queryOptions);
        }
      }
      // ========================== STAGE 4
      // LOCATION AVAILABILTY
      if (item.stageFourLocation != null && item.stageFourLocation !== '' && item.stageFourLocation != 'CONTACT') {
        item.stageFourLocation.replace('X', '');
        item.stageFourLocation.replace('x', '');
        const it = item.stageFourLocation.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'location\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageFourLocation = await getConnection().query(queryOptions);
        }
      }
      // DSG SOFTWARE OPTION
      if (item.stageFourDsgSoftware != null && item.stageFourDsgSoftware !== '' && item.stageFourDsgSoftware != 'CONTACT') {
        item.stageFourDsgSoftware.replace('X', '');
        item.stageFourDsgSoftware.replace('x', '');
        const it = item.stageFourDsgSoftware.split(';');
        const dataOptions: any = await this.containRequiredOption(it);
        const queryOptions = 'SELECT * FROM dsg_options where id in (' + it + ')';
        if (queryOptions != null) {
          item.stageFourDsgSoftware = await getConnection().query(queryOptions);
          for (let ele of item.stageFourDsgSoftware) {
            if (ele.options == 'Multiple') {
              ele.options = await this.getSecondaryOptionsDSG(ele.option_id);
            }
            const dataField: any = await this.addFieldToItem(ele, dataOptions.required, dataOptions.recomended);
            ele = { dataField };        
            
          }  
        }
      }
      // WARNING
      if (item.stageFourDsgWarnings != null && item.stageFourDsgWarnings !== '' && item.stageFourDsgWarnings != 'CONTACT') {
        item.stageFourDsgWarnings.replace('X', '');
        item.stageFourDsgWarnings.replace('x', '');
        const it = item.stageFourDsgWarnings.split(';');
        const queryOptions = 'SELECT * FROM vehicles_options where type = \'warning\' and id in (' + it + ')';
        if (queryOptions != null) {
          item.stageFourDsgWarnings = await getConnection().query(queryOptions);
        }
      }
    }
    return data;
  }

  async getSecondaryOptionsDSG(id) {
    return new Promise(async resolve => {
      const data = await getConnection().query(`SELECT * FROM dsg_options_two where option_id = ${id}`);
      if (data.length > 0) {
        resolve(data);
      } else {
        resolve([]);
      }
    });
  }

  async requestCustomizer(body, files): Promise<ResponseInterface> {
    body.numberOrder = body.id + await generateRandomInteger(15);
    const filesSave: any[] = files.map(file => {
      return {
        name: file.originalname,
        type: file.mimetype,
        key: file.key,
        s3url: file.location,
        size: file.size,
      };
    });

    const data: any = await this.customSoftwareEntityRepository.save({
      userId: body.id,
      type: body.type,
      description: JSON.stringify(body),
      numberOrder: body.numberOrder,
      extraData: JSON.stringify(filesSave),
      status: 'New',
    });

    if (filesSave.length) {
      await this.answerEntityRepository.save({
        orderId: data.id,
        userId: body.id,
        extraData: JSON.stringify(filesSave),
        message: 'Initial user files',
      });
    }
    const user = await this.userRepository.findOne(body.id);
    if (user != null) {
      body.name = user.name + '' + user.lastName;
      body.amount = 'PENDING';
      body.date = new Date().toISOString().slice(0, 10);
      sendEmail({
        data: body,
        to: user.email,
        subject: 'DEALER CUSTOM SOFTWARE REQUEST FORM - TVS GROUP INTERNATIONAL',
        html: 'custom-software',
      });
      sendEmail({
        data: body,
        to: Configuration.EMAIL_ADMIN_NOTIFICATION,
        subject: 'NEW CUSTOM  DEALER SOFTWARE REQUEST FORM - TVS GROUP INTERNATIONAL',
        html: 'custom-software',
      });
      sendWhatsappMessage(Configuration.NUMBER_WHATSAAP, 'NEW CUSTOM DEALER REQUEST FORM. Name: ' + body.name + ' Email: ' + user.email);

      const users = (await this.userRepository.find({
          where: [{ type: Like(`%administrator%`), status: 1 },
            { type: Like(`%calibrator%`), status: 1 }],
        })
      ).map((e) => e.id);

      this.socketService.emitToUsers(users, 'custom_orders');
      this.socketService.emitToAll('newSoftwareOrder', {
        name: `${user.name} ${user.lastName}`,
        type: body.type,
      });
      this.socketService.emitToUsers(users, 'notify', {
        id: data.id,
        text: `From ${user.name} ${user.lastName}`,
        title: 'New custom order',
        time: data.createdAt,
        type: 'newCustomOrder',
      });
      return {
        statusCode: 200,
        error: null,
        message: 'success',
      };
    } else {
      return {
        statusCode: 404,
        error: null,
        message: 'no found',
      };
    }

  }

  async detailRequestCustomizer(body): Promise<ResponseInterface> {
    const data = await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(OrderCustomSoftwareEntity, 'user')
      .where('user.number_order = :id', { id: body.id })
      .getOne();
    return {
      statusCode: 200,
      error: null,
      message: data,
    };
  }

  async checkout(body): Promise<ResponseInterface> {
    if (body.type.toString() === 'chiptuning') {
      body.type = 'Engine Tune';
    } else if (body.type.toString() === 'dsgchiptuning') {
      body.type = 'DSG Tune';
    } else {
      body.type = 'Combo Tune';
    }
    const user = await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.id = :id', { id: body.userId })
      .getOne();
    if (user != null) {
      body.name = user.name + '' + user.lastName;
      body.amount = 'PENDING';
      body.date = new Date().toISOString().slice(0, 10);
      body.numberOrder = body.userId + await generateRandomInteger(15);
      await this.orderSotwareRepository.save({
        orderId: body.numberOrder,
        dealerId: body.userId,
        VIN: body.VIN,
        vehicle: body.vehicle,
        credit: 0,
        type: body.type,
        status: 'New',
        urgency: body.urgency,
        description: JSON.stringify(body),
      });
      let data = await getConnection().query('SELECT * FROM `order_software` ORDER BY id DESC LIMIT 1');
      data = data[0];
      const description = JSON.parse(data.description);
      let rows = '';
      description.item.forEach(item => {
        rows += '<tr class="item">';
        rows += '<td>' + item.name + ' </td>' +
          '<td>' +
          '<ul style="list-style: none;">';
        item.options.forEach(value => {
          rows += '<li>' + value.description + '</li>';
        });
        rows += '</ul> ' +
          '</td>';
        rows += '</tr>';
      });

      sendEmail({
        data: {
          numberOrder: data.order_id,
          dateNow: data.createdAt,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          country: user.country,
          dealerId: data.userId,
          vin: data.VIN,
          vehicle: data.vehicle,
          credit: 0,
          items: rows,
          type: data.type,
          status: 'New',
          urgency: data.urgency,
          description: JSON.parse(data.description),
        },
        to: user.email,
        subject: 'DEALER ORDER SOFTWARE',
        html: 'order-software',
      });

      sendEmail({
        data: {
          numberOrder: data.order_id,
          dateNow: data.createdAt,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          country: user.country,
          dealerId: data.userId,
          vin: data.VIN,
          vehicle: data.vehicle,
          credit: 0,
          items: rows,
          type: data.type,
          status: 'New',
          urgency: data.urgency,
          description: JSON.parse(data.description),
        },
        to: Configuration.EMAIL_ADMIN_NOTIFICATION,
        subject: 'NEW ORDER SOFTWARE',
        html: 'order-software',
      });

      const users = (await this.userRepository.find({ where: { type: 'administrator', status: 1 } })
      ).map((e) => e.id);
      this.socketService.emitToUsers(users, 'normal_orders');
      return {
        statusCode: 200,
        error: null,
        message: null,
      };
    } else {
      return {
        statusCode: 404,
        error: 'no found',
        message: null,
      };
    }

  }

  async view(id): Promise<ResponseInterface> {
    return {
      statusCode: 200,
      error: null,
      message: await this.orderSotwareRepository.findOne({ where: { orderId: id } }),
    };
  }

  async getSecondaryOptions(body): Promise<ResponseInterface> {
    const hardware = body.arrayOptions.filter(x => x.type.toString() === 'hardware_modification')[0];
    const engine = body.arrayOptions.filter(x => x.type.toString() === 'engine_software')[0];
    let dataHardware = [];
    let dataEngine = [];
    if (engine.id.length > 0) {
      const queryEngine = 'SELECT * FROM vehicles_options where type = \'engine_software\' and option_id in (' + engine.id + ')';
      dataEngine = await getConnection().query(queryEngine);
      for (const item of dataEngine) {
        if (item != null) {
          item.secondaryOptions = [];
          if (item.options != null) {
            const it = item.options.split(';');
            const querySecondary = 'select * from vehicles_options_two where status=1 and option_id in (' + it + ')';
            const dataSecondary = await getConnection().query(querySecondary);
            if (dataSecondary.length > 0) {
              item.secondaryOptions.push(...dataSecondary);
            }
          }
        }

      }
    }
    if (hardware.id.length > 0) {
      const queryHardware = 'SELECT * FROM vehicles_options where type = \'hardware_modification\' and option_id in (' + hardware.id + ')';
      dataHardware = await getConnection().query(queryHardware);
      for (const item of dataHardware) {
        if (item != null) {
          item.secondaryOptions = [];
          if (item.options != null) {
            const it = item.options.split(';');
            const querySecondary = 'select * from vehicles_options_two where status=1 and option_id in (' + it + ')';
            const dataSecondary = await getConnection().query(querySecondary);
            if (dataSecondary.length > 0) {
              item.secondaryOptions.push(...dataSecondary);
            }
          }
        }
      }
    }
    return {
      statusCode: 200,
      error: null,
      message: {
        vehicleId: body.vehicleId,
        hardwareOptions: dataHardware,
        engineOptions: dataEngine,
      },
    };

  }

  async findByVIN(body): Promise<ResponseInterface> {
    const data = await findByVIN(body.vin);
    return {
      statusCode: 200,
      error: null,
      message: data,
    };
  }

  async responseFindVin(body) {
    if (body.vehicle_identification_no !== undefined) {
      const vin = body.vehicle_identification_no;
      const engineCode = body.engine_code;
      const make = body.make;
      const model = body.model;
      let data = await this.vehicleRepository.find({
        where: {
          make,
          model,
          engineCode: Like('%' + engineCode + '%'),
        },
      });
      if (!data.length) {
        data = await this.vehicleRepository.find({
          where: {
            make,
            model,
            engineCode: Like('%' + engineCode.substring(0, engineCode.length - 1) + '%'),
          },
        });
        if (data.length){
          this.socketService.emitToAll(vin, {
            body,
            statusCode: 200,
            error: null,
            message: await processPricesStages(data),
          });
        } else {
          this.socketService.emitToAll(vin, {
            body,
            statusCode: 404,
            error: 'no_found',
            message: null
          })
        }
      } else {
        this.socketService.emitToAll(vin, {
          body,
          statusCode: 200,
          error: null,
          message: await processPricesStages(data),
        });
      }
    } else {
      this.socketService.emitToAll(body.vin, { statusCode: 404, msg: body.error });
    }

  }


}
