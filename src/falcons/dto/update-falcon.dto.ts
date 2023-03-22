import { PartialType } from '@nestjs/mapped-types';
import { CreateFalconDto } from './create-falcon.dto';

export class UpdateFalconDto extends PartialType(CreateFalconDto) {}
