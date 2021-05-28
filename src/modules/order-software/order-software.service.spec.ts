import { Test, TestingModule } from '@nestjs/testing';
import { OrderSoftwareService } from './order-software.service';

describe('OrderSoftwareService', () => {
  let service: OrderSoftwareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderSoftwareService],
    }).compile();

    service = module.get<OrderSoftwareService>(OrderSoftwareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
