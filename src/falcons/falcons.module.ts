import { Module } from '@nestjs/common';
import { FalconsController } from './falcons.controller';
import { FalconsService } from './falcons.service';

@Module({
  controllers: [FalconsController],
  providers: [FalconsService]
})
export class FalconsModule {}
