import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesDsgController } from './vehicles-dsg.controller';

describe('VehiclesCombos Controller', () => {
  let controller: VehiclesDsgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesDsgController],
    }).compile();

    controller = module.get<VehiclesDsgController>(VehiclesDsgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
