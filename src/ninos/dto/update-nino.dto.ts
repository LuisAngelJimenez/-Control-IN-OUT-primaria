import { PartialType } from '@nestjs/mapped-types';
import { CreateNinoDto } from './create-nino.dto';

export class UpdateNinoDto extends PartialType(CreateNinoDto) {}
