import { Test, TestingModule } from '@nestjs/testing';
import { UserNetworkService } from './user-network.service';

describe('UserNetworkService', () => {
  let service: UserNetworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserNetworkService],
    }).compile();

    service = module.get<UserNetworkService>(UserNetworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
