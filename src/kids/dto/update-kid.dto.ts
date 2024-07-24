import { PartialType } from '@nestjs/mapped-types';
import { CreateKidDto } from './create-kid.dto';
import { IsDate, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { Group } from 'src/groups/entities/group.entity';
import { Tutor } from 'src/tutors/entities/tutor.entity';

export class UpdateKidDto extends PartialType(CreateKidDto) {
   @MinLength(3)
   @IsString()
   name?:string
   @MinLength(3)
   @IsString()
   flastname?:string
   @MinLength(3)
   @IsString()
   slastname?:string
   @IsPositive()
   @IsNumber()
   @Type(() => Number)
   group?: Group
   @IsPositive()
   @IsNumber()
   @Type(() => Number)
   tutor?: Tutor
   @IsDate()
   @Type(() => Date)
   birthdate?: Date
   @IsString()
   img?: string
}
