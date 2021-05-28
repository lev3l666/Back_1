import { Test, TestingModule } from '@nestjs/testing';
import { CreditMovementController } from './credit-movement.controller';
import { CreditMovementService } from './credit-movement.service';

describe('CreditMovementController', () => {
  let controller: CreditMovementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditMovementController],
      providers: [CreditMovementService],
    }).compile();

    controller = module.get<CreditMovementController>(CreditMovementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
