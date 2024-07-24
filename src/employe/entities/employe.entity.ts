import { Kid } from "src/kids/entities/kid.entity";
import { Recolection } from "src/recolections/entities/recolection.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employe {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    flastname: string;
    @Column()
    slastname: string;
    @Column({ type: 'date' })
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
    zip: string;
    @Column()
    rols: string
    @Column({default: true})
    
    @Column()
    image?: string;
    //aqui duda 
    is_active:boolean
    @OneToMany(()=> Recolection, hijos => hijos.tutor)
    recolection: Recolection[];
}
