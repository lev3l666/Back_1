import { Test, TestingModule } from '@nestjs/testing';
import { CreditMovementService } from './credit-movement.service';

describe('CreditMovementService', () => {
  let service: CreditMovementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditMovementService],
    }).compile();

    service = module.get<CreditMovementService>(CreditMovementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
