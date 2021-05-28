import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesPricesController } from './vehicles-prices.controller';

describe('VehiclesPrices Controller', () => {
  let controller: VehiclesPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesPricesController],
    }).compile();

    controller = module.get<VehiclesPricesController>(VehiclesPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
