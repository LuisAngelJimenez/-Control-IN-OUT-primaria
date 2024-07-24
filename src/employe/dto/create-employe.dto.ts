import { Type } from "class-transformer"
import { IsDate, IsEmail, IsNumber, IsNumberString, IsPositive, IsString, Length, MaxLength, MinLength } from "class-validator"

export class CreateEmployeDto {
    @IsString()
  name: string;

  @IsString()
  @Length(3)
  flastname: string;

  @IsString()
  @Length(3)
  slastname: string;

  @IsNumberString()
  @Length(10, 10)
  phone: string;  // Limitar a exactamente 10 caracteres numéricos

  @IsEmail()
  email?: string;

  @IsString()
  @Length(18)
  curp: string;

  @IsPositive()
  @IsNumber()
  number: number;

  @IsString()
  street: string;

  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsNumberString()
  @Length(5, 5)
  zip: string;  // Limitar a exactamente 5 caracteres numéricos

  @IsString()
  rol:string;
}
