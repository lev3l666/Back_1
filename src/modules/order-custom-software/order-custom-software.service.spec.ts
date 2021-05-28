import { Test, TestingModule } from '@nestjs/testing';
import { OrderCustomSoftwareService } from './order-custom-software.service';

describe('OrderCustomSoftwareService', () => {
  let service: OrderCustomSoftwareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderCustomSoftwareService],
    }).compile();

    service = module.get<OrderCustomSoftwareService>(OrderCustomSoftwareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
