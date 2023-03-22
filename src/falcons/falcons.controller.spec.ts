import { Test, TestingModule } from '@nestjs/testing';
import { FalconsController } from './falcons.controller';

describe('FalconsController', () => {
  let controller: FalconsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FalconsController],
    }).compile();

    controller = module.get<FalconsController>(FalconsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
