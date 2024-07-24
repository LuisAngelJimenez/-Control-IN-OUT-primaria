import { Employe } from "src/employe/entities/employe.entity";
import { Group } from "src/groups/entities/group.entity";
import { Tutor } from "src/tutors/entities/tutor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recolection {
    @PrimaryGeneratedColumn() 
    id:number;
    
    @Column()
    date: Date;

    @Column()
    time: string;

    @ManyToOne(()=>Group, group => group.kid)
    group: Group;
    @ManyToOne(()=>Tutor, tutor => tutor.kid)
    tutor: Tutor;

    @Column({
        default:true
    })
    is_active:boolean
    
    @Column()
    image?: string;
}
