import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employe } from './entities/employe.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private emploRepo: Repository<Employe>){}
  async create(createEmployeDto: CreateEmployeDto) {
    try{
      const employe = this.emploRepo.create(createEmployeDto);
      await this.emploRepo.save(employe);
      console.log(`${employe.zip}`.length)
      console.log(`${employe.curp}`.length)
      return employe;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try{
      const employers = await this.emploRepo.find();
      return employers;
    }catch(error){
      throw new InternalServerErrorException(error);
    } 
  }

  async findOne(id: number) {
    try{
      const employe = await this.emploRepo.findOne({
        where:{
          id 
        }
      });
      if(!employe){
        throw new NotFoundError('Empleado no encontrado');
      }
      return employe;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateEmployeDto: UpdateEmployeDto) {
    try{
      const employe = await this.emploRepo.preload({
        id,
        ...updateEmployeDto
      });
      await this.emploRepo.save(employe);
      return employe
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try{
      const employe = await this.emploRepo.findOne({
        where:{
          id 
        }
      });
      if(!employe){
        throw new NotFoundError('Empleado no encontrado');
      }else{
        await this.emploRepo.delete(id)
        return{
          message: "El Empleado se ha eliminado"
        }
      }
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async active(id:number){
    try{
      const employe = await this.emploRepo.findOne({
        where:{
          id 
        }
      });
      const employeUpdate = await this.emploRepo.preload({
        id,
        is_active: !employe.is_active
      })
      await this.emploRepo.save(employeUpdate);
      return employeUpdate;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }
}
