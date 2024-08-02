import { IsInt, IsNumber, IsPositive, IsString, MinLength } from "class-validator"

export class CreateNinoDto {
    @MinLength(3)
    @IsString()
    Nombre:string
   @MinLength(3)
   @IsString()
   Apellido:string
   @IsString()
   Grupo:string
   @IsNumber()
   @IsInt()
   @IsPositive()
   Edad: number
}
