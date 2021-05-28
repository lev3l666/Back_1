import { Test, TestingModule } from '@nestjs/testing';
import { SupportCategoryService } from './support-category.service';

describe('SupportCategoryService', () => {
  let service: SupportCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportCategoryService],
    }).compile();

    service = module.get<SupportCategoryService>(SupportCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
