import { Test, TestingModule } from '@nestjs/testing';
import { UserVerificationController } from './user-verification.controller';

describe('UserVerification Controller', () => {
  let controller: UserVerificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserVerificationController],
    }).compile();

    controller = module.get<UserVerificationController>(UserVerificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
