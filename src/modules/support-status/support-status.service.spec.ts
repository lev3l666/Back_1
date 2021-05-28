import { Test, TestingModule } from '@nestjs/testing';
import { SupportStatusService } from './support-status.service';

describe('SupportStatusService', () => {
  let service: SupportStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportStatusService],
    }).compile();

    service = module.get<SupportStatusService>(SupportStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
