import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesFileService } from './vehicles-file.service';

describe('VehiclesFileService', () => {
  let service: VehiclesFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesFileService],
    }).compile();

    service = module.get<VehiclesFileService>(VehiclesFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
