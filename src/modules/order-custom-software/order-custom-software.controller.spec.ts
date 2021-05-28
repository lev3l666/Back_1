import { Test, TestingModule } from '@nestjs/testing';
import { OrderCustomSoftwareController } from './order-custom-software.controller';

describe('OrderCustomSoftware Controller', () => {
  let controller: OrderCustomSoftwareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderCustomSoftwareController],
    }).compile();

    controller = module.get<OrderCustomSoftwareController>(OrderCustomSoftwareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
