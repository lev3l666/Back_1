import { Test, TestingModule } from '@nestjs/testing';
import { SupportStatusController } from './support-status.controller';

describe('SupportStatusController', () => {
  let controller: SupportStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportStatusController],
    }).compile();

    controller = module.get<SupportStatusController>(SupportStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
