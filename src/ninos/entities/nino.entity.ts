import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Nino {
    @PrimaryGeneratedColumn() //esto es para que genere las columnas
    id:number;
    @Column()
    Nombre:string;
    @Column()
    Apellido:string;
    @Column()
    Grupo:string;
    @Column()
    Edad:number;
    @Column({
        default:true
    })
    is_active:boolean
}
