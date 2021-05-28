import { Test, TestingModule } from '@nestjs/testing';
import { SupportCategoryController } from './support-category.controller';

describe('SupportCategoryController', () => {
  let controller: SupportCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportCategoryController],
    }).compile();

    controller = module.get<SupportCategoryController>(SupportCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
