import { Kid } from "src/kids/entities/kid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tutor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    flastname: string;
    @Column()
    slastname: string;
    @Column()
    birthdate: Date;
    @Column()
    phone: string;
    @Column()
    email?: string;
    @Column()
    curp: string;
    @Column()
    number: number;
    @Column()
    street: string;
    @Column()
    neighborhood: string;
    @Column()
    city: string;
    @Column()
    zip: number;
    @Column({default: true})
    is_active: boolean;
    @Column()
    image?: string;
    @OneToMany(()=> Kid, hijos => hijos.tutor)
    kid: Kid[];
}
