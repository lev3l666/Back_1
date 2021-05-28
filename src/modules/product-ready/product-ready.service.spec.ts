import { Test, TestingModule } from '@nestjs/testing';
import { ProductReadyService } from './product-ready.service';

describe('ProductReadyService', () => {
  let service: ProductReadyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductReadyService],
    }).compile();

    service = module.get<ProductReadyService>(ProductReadyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
