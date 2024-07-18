import { Group } from "src/groups/entities/group.entity";
import { Tutor } from "src/tutors/entities/tutor.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


export class Recolection {
    @PrimaryGeneratedColumn() 
    id:number;
    
    @Column()
    date:string;
    @Column()
    hour:string;

    @ManyToOne(()=>Group, group => group.kid)
    group: Group;
    @ManyToOne(()=>Tutor, tutor => tutor.kid)
    tutor: Tutor;
    //aqui falta el de employe

    @Column({
        default:true
    })
    is_active:boolean
    @Column()
    image?: string;
}
