import { InjectEntityManager } from "@nestjs/typeorm";
import { Kid } from "src/kids/entities/kid.entity";
import { Recolection } from "src/recolections/entities/recolection.entity";
import { Column, Entity, EntityManager, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    zip: number;
    @Column({default: true})
    is_active: boolean;
    @Column()
    img: string;
    @Column()
    rol: string;
    @OneToMany(()=> Recolection, recolection => recolection.tutor)
    recolection: Recolection[];
    /* @ManyToMany(() => Kid, kid => kid.tutor)
    @JoinTable({
        name: 'kid_tutor',
        joinColumns: [{ name: 'id_tutor' }],
        inverseJoinColumns: [{ name: 'id_kid' }],
    })
    kid: Kid[]; */
    @ManyToMany(() => Kid, kid => kid.tutor, { onDelete: 'CASCADE'})
    kid: Kid[];
}
