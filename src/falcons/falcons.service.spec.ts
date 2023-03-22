import { Test, TestingModule } from '@nestjs/testing';
import { FalconsService } from './falcons.service';

describe('FalconsService', () => {
  let service: FalconsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FalconsService],
    }).compile();

    service = module.get<FalconsService>(FalconsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
