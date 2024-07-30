import { Employee } from "src/employees/entities/employee.entity";
import { Kid } from "src/kids/entities/kid.entity";
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

    @ManyToOne(()=>Employee, employee => employee.recolection)
    employee: Employee;
    @ManyToOne(()=>Kid, kid => kid.recolection)
    kid: Kid;
    @ManyToOne(()=>Tutor, tutor => tutor.recolection)
    tutor: Tutor;

    @Column({
        default:true
    })
    is_active:boolean
    
    @Column()
    image?: string;
}
