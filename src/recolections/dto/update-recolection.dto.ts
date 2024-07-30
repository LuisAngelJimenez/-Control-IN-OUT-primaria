import { PartialType } from '@nestjs/mapped-types';
import { CreateRecolectionDto } from './create-recolection.dto';

export class UpdateRecolectionDto extends PartialType(CreateRecolectionDto) {}
