import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesOptionsController } from './vehicles-options.controller';

describe('VehiclesOptions Controller', () => {
  let controller: VehiclesOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesOptionsController],
    }).compile();

    controller = module.get<VehiclesOptionsController>(VehiclesOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
