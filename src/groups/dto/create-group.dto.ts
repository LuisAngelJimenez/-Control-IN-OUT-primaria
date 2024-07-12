import { IsString, MinLength } from "class-validator";

export class CreateGroupDto {
    @MinLength(3)
    @IsString()
    name: string;
}
