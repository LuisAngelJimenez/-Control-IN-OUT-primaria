import { Column } from "typeorm";

export class CreateGroupDto {
    @Column()
    name: string;
}
