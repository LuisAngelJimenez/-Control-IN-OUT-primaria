import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private emploRepo: Repository<Employee>){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    try{
      const employee = this.emploRepo.create(createEmployeeDto);
      await this.emploRepo.save(employee);
      console.log(`${employee.zip}`.length)
      console.log(`${employee.curp}`.length)
      return employee;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try{
      const employeers = await this.emploRepo.find();
      return employeers;
    }catch(error){
      throw new InternalServerErrorException(error);
    } 
  }

  async findOne(id: number) {
    try{
      const employee = await this.emploRepo.findOne({
        where:{
          id 
        }
      });
      if(!employee){
        throw new NotFoundError('Empleado no encontrado');
      }
      return employee;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    try{
      const employee = await this.emploRepo.preload({
        id,
        ...updateEmployeeDto
      });
      await this.emploRepo.save(employee);
      return employee
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try{
      const employee = await this.emploRepo.findOne({
        where:{
          id 
        }
      });
      if(!employee){
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
      const employee = await this.emploRepo.findOne({
        where:{
          id 
        }
      });
      const employeeUpdate = await this.emploRepo.preload({
        id,
        is_active: !employee.is_active
      })
      await this.emploRepo.save(employeeUpdate);
      return employeeUpdate;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }
}