import { Test, TestingModule } from '@nestjs/testing';
import { ProductReadyController } from './product-ready.controller';
import { ProductReadyService } from './product-ready.service';

describe('ProductReadyController', () => {
  let controller: ProductReadyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductReadyController],
      providers: [ProductReadyService],
    }).compile();

    controller = module.get<ProductReadyController>(ProductReadyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
