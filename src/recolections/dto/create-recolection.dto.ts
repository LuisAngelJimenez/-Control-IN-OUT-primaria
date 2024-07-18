import { Type } from "class-transformer";
import { IsDate, IsDateString, IsString, Matches, MinLength } from "class-validator";


export class CreateRecolectionDto {
    @IsDate()
    @Type(() => Date)
    date: Date

    
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, { message: 'Hour must be in the format HH:mm:ss' })
    hour: string;
    
}
