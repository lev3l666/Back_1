import { Test, TestingModule } from '@nestjs/testing';
import { UserNetworkController } from './user-network.controller';

describe('UserNetwork Controller', () => {
  let controller: UserNetworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserNetworkController],
    }).compile();

    controller = module.get<UserNetworkController>(UserNetworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
