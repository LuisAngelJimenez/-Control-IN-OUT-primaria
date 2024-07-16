import { Kid } from "src/kids/entities/kid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({
        default:true
    })
    is_active:boolean
    @OneToMany(()=> Kid, alumno => alumno.group)
    kid: Kid[];
}
