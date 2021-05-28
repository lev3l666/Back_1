import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { VehiclesOptionsTwoEntity } from './vehicles-options-two.entity';
import { getRelativePath } from '../../globals';
import { SocketService } from '../socket/socket.service';
import { User } from '../user/user.entity';

// helper
// tslint:disable-next-line:no-var-requires
const readXlsxFile = require('read-excel-file/node');
// tslint:disable-next-line:no-var-requires
const fs = require('fs');

@Injectable()
export class VehiclesOptionsTwoService {
  constructor(
    @InjectRepository(VehiclesOptionsTwoEntity)
    private readonly vehiclesSecondaryOptionsRepository: Repository<VehiclesOptionsTwoEntity>,
   @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly socketService: SocketService,
  ) {
  }

  async count() {
    const count = await this.vehiclesSecondaryOptionsRepository.find({
      where: { status: 0 },
    });

    return {
      statusCode: 200,
      error: null,
      message: count.length,
    };
  }

  async index() {
    return {
      statusCode: 200,
      error: null,
      message: await this.vehiclesSecondaryOptionsRepository.find({
        where: { status: 1 },
      }),
    };
  }

  async waitingApproval() {
    return {
      statusCode: 200,
      error: null,
      message: await this.vehiclesSecondaryOptionsRepository.find({
        where: { status: 0 },
      }),
    };
  }

  async createProduct(body){
    const data = await this.vehiclesSecondaryOptionsRepository.save(
      { optionId: body.optionId, type: body.type, description: body.description, explanation: body.explanation  }
    )

    const users = (await this.userRepository.find({
      where: [{ type: Like(`%administrator%`), status: 1 },
        { type: Like(`%calibrator%`), status: 1 }],
      })
    ).map((e) => e.id);

    this.socketService.emitToUsers(users, 'notify', {
      id: data.id,
      text: `${body.description}`,
      title: 'New custom product created',
      time: data.createdAt,
      type: 'newCustomProduct',
    });

      return { statusCode: 200, error: null, id: data.id, optionId: data.optionId };
  }

  async productStatus(body){
    if (body.status == 0)
    {
      await this.vehiclesSecondaryOptionsRepository.delete({ id: body.id });
    }
    if (body.status == 1)
    {
      await this.vehiclesSecondaryOptionsRepository.update({ id: body.id }, { status: 1 });
    }
      return { statusCode: 200, error: null};
  }

  async insertDataFromExcelFile(body: []) {
    const dataNoSave = [];
    for (const [i, value] of body.entries()) {
      const model = new VehiclesOptionsTwoEntity();
      model.type = value[1];
      model.description = value[2];
      model.explanation = value[3];
      model.optionId = value[4];
      model.status = 1;
      const valueEngine = value[5];
      // @ts-ignore
      model.engineCode = (valueEngine !== null) ? JSON.stringify(valueEngine.split(';')) : '';
      const resultSave = await this.vehiclesSecondaryOptionsRepository.save(model);
      if (!(resultSave.id)) {
        dataNoSave.push(`${i}-${value[0]}-${value[1]}`);
      }
    }

    return dataNoSave;
  }

  public async readExcelFile(name: string): Promise<any> {
    return readXlsxFile(fs.createReadStream(`${getRelativePath()}/${name}`), { sheet: 3 })
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
