import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesFileController } from './vehicles-file.controller';

describe('VehiclesFile Controller', () => {
  let controller: VehiclesFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesFileController],
    }).compile();

    controller = module.get<VehiclesFileController>(VehiclesFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
