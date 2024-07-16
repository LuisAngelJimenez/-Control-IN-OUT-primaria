import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNinoDto } from './dto/create-nino.dto';
import { UpdateNinoDto } from './dto/update-nino.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Nino } from './entities/nino.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NinosService {
  constructor(
    @InjectRepository(Nino)
    private niñoRepo:Repository<Nino>){}

  async create(createNinoDto: CreateNinoDto) {
    const nino = this.niñoRepo.create(createNinoDto);
    await this.niñoRepo.save(nino);
    return nino;}
    catch(error){
      throw new InternalServerErrorException(error);
  }

  findAll() {
    return `This action returns all ninos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nino`;
  }

  update(id: number, updateNinoDto: UpdateNinoDto) {
    return `This action updates a #${id} nino`;
  }

  remove(id: number) {
    return `This action removes a #${id} nino`;
  }
}
