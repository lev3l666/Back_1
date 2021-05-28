import { Test, TestingModule } from '@nestjs/testing';
import { OrderSoftwareController } from './order-software.controller';

describe('OrderSoftware Controller', () => {
  let controller: OrderSoftwareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderSoftwareController],
    }).compile();

    controller = module.get<OrderSoftwareController>(OrderSoftwareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
