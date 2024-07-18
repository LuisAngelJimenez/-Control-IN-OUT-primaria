import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidDto } from './dto/update-kid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Kid } from './entities/kid.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class KidsService {
  constructor(
    @InjectRepository(Kid)
    private kidRepo: Repository<Kid>,
    private CloudinaryService: CloudinaryService
  ){}
  async create(createKidDto: CreateKidDto, file: Express.Multer.File, folder: string) {
    try{
      const uploadImage = await this.CloudinaryService.uploadFile(file, folder);
      const imageUrl = uploadImage.url;
      const kid = this.kidRepo.create({ ...createKidDto, img: imageUrl});
      await this.kidRepo.save(kid);
      return kid;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try{
      const kids = await this.kidRepo.find({
        relations: ['group', 'tutor']
      });
      return kids;
    }catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try{
      const kid = await this.kidRepo.findOne({
        where:{
          id 
        },
        relations: ['group', 'tutor']
      });
      if(!kid){
        throw new NotFoundException('Alumno no encontrado');
      }
      return kid;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateKidDto: UpdateKidDto) {
    try{
      const kid = await this.kidRepo.preload({
        id,
        ...updateKidDto
      });
      await this.kidRepo.save(kid);
      return kid
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try{
      const kid = await this.kidRepo.findOne({
        where:{
          id 
        }
      });
      if(!kid){
        throw new NotFoundException('Alumno no encontrado');
      }else{
        await this.kidRepo.delete(id)
        return{
          message: "El Alumno se ha eliminado"
        }
      }
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async active(id:number){
    try{
      const kid = await this.kidRepo.findOne({
        where:{
          id 
        }
      });
      const kidUpdate = await this.kidRepo.preload({
        id,
        is_active: !kid.is_active
      })
      await this.kidRepo.save(kidUpdate);
      return kidUpdate;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }
}
