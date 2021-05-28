import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesDsgService } from './vehicles-dsg.service';

describe('VehiclesCombosService', () => {
  let service: VehiclesDsgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesDsgService],
    }).compile();

    service = module.get<VehiclesDsgService>(VehiclesDsgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
