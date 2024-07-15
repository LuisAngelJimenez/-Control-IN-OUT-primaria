import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tutor } from './entities/tutor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TutorsService {
  constructor(
    @InjectRepository(Tutor)
    private tutorRepo: Repository<Tutor>){}
  async create(createTutorDto: CreateTutorDto) {
    try{
      const tutor = this.tutorRepo.create(createTutorDto);
      await this.tutorRepo.save(tutor);
      console.log(`${tutor.zip}`.length)
      console.log(`${tutor.curp}`.length)
      return tutor;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try{
      const tutors = await this.tutorRepo.find();
      return tutors;
    }catch(error){
      throw new InternalServerErrorException(error);
    } 
  }

  async findOne(id: number) {
    try{
      const tutor = await this.tutorRepo.findOne({
        where:{
          id 
        }
      });
      if(!tutor){
        throw new NotFoundException('Producto no encontrado');
      }
      return tutor;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateTutorDto: UpdateTutorDto) {
    try{
      const tutor = await this.tutorRepo.preload({
        id,
        ...updateTutorDto
      });
      await this.tutorRepo.save(tutor);
      return tutor
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try{
      const tutor = await this.tutorRepo.findOne({
        where:{
          id 
        }
      });
      if(!tutor){
        throw new NotFoundException('Tutor no encontrado');
      }else{
        await this.tutorRepo.delete(id)
        return{
          message: "El Tutor se ha eliminado"
        }
      }
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async active(id:number){
    try{
      const tutor = await this.tutorRepo.findOne({
        where:{
          id 
        }
      });
      const tutorUpdate = await this.tutorRepo.preload({
        id,
        is_active: !tutor.is_active
      })
      await this.tutorRepo.save(tutorUpdate);
      return tutorUpdate;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }
}
