import { Employe } from "src/employe/entities/employe.entity";
import { Group } from "src/groups/entities/group.entity";
import { Recolection } from "src/recolections/entities/recolection.entity";
import { Tutor } from "src/tutors/entities/tutor.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Kid {
    @PrimaryGeneratedColumn() 
    id:number;
    @Column()
    name:string;
    @Column()
    flastname:string;
    @Column()
    slastname:string;
    @ManyToOne(()=>Group, group => group.kid)
    group: Group;
    @OneToMany(()=> Recolection, recolection => recolection.kid)
    recolection: Recolection[];
    @ManyToMany(() => Tutor, tutor => tutor.kid)
    @JoinTable({
        name: 'kid_tutor',
        joinColumns: [{ name: 'id_kid' }],
        inverseJoinColumns: [{ name: 'id_tutor' }],
    })
    tutor: Tutor[];

    @Column({ type: 'date' })
    birthdate: Date;
    @Column({
        default:true
    })
    is_active:boolean
    @Column()
    img: string;
}
