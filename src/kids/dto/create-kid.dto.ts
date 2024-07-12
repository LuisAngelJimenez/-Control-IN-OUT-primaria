import { Type } from "class-transformer"
import { IsDate, IsInt, IsNumber, IsPositive, IsString, MinLength } from "class-validator"
import { Group } from "src/groups/entities/group.entity"
import { Tutor } from "src/tutors/entities/tutor.entity"

export class CreateKidDto {
   @MinLength(3)
   @IsString()
   name:string
   @MinLength(3)
   @IsString()
   flastname:string
   @MinLength(3)
   @IsString()
   slastname:string
   @IsPositive()
   @IsNumber()
   group: Group
   @IsPositive()
   @IsNumber()
   tutor: Tutor
   @IsDate()
   @Type(() => Date)
   birthdate: Date
}
