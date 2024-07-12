import { Type } from "class-transformer"
import { IsDate, IsEmail, IsNumber, IsPhoneNumber, IsPositive, IsPostalCode, IsString, MinLength } from "class-validator"

export class CreateTutorDto {
   @MinLength(3)
   @IsString()
   name:string
   @MinLength(3)
   @IsString()
   flastname:string
   @MinLength(3)
   @IsString()
   slastname:string
   @IsDate()
   @Type(() => Date)
   birthdate: Date
   @IsString()
   @MinLength(10)
   phone: string
   @IsEmail()
   email?: string
   @IsString()
   @MinLength(18)
   curp: string
   @IsPositive()
   @IsNumber()
   number: number
   @IsString()
   street: string
   @IsString()
   neighborhood: string
   @IsString()
   city: string
   @IsNumber()
   @IsPositive()
   @MinLength(5)
   zip: number
}
