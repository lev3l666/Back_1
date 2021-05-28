import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesOptionsService } from './vehicles-options.service';

describe('VehiclesOptionsService', () => {
  let service: VehiclesOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesOptionsService],
    }).compile();

    service = module.get<VehiclesOptionsService>(VehiclesOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
