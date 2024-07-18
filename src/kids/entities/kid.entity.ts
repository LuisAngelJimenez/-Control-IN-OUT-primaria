import { Group } from "src/groups/entities/group.entity";
import { Tutor } from "src/tutors/entities/tutor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @ManyToOne(()=>Tutor, tutor => tutor.kid)
    tutor: Tutor;
    @Column({ type: 'date' })
    birthdate: Date;
    @Column({
        default:true
    })
    is_active:boolean
    @Column()
    img: string;
}
