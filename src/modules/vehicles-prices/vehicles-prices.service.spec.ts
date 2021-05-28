import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesPricesService } from './vehicles-price.service';

describe('VehiclesPriceService', () => {
  let service: VehiclesPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesPricesService],
    }).compile();

    service = module.get<VehiclesPricesService>(VehiclesPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
