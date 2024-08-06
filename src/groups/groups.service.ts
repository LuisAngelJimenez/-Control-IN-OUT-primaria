import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupRepo: Repository<Group>){}
  
  async create(createGroupDto: CreateGroupDto) {
    try{
      const group = this.groupRepo.create(createGroupDto);
      await this.groupRepo.save(group);
      return group;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    try{
      const group = this.groupRepo.find();
      return group;
    }catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try{
      console.log(typeof id)
      const group = await this.groupRepo.findOne({
        where:{
          id
        }
      });
      console.log(group)
      if(!group){
        throw new NotFoundException(`Group with id ${id} not found`);
      }
      return group;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    try{
      const group = await this.groupRepo.preload({
        id,
        ...updateGroupDto
      });
      await this.groupRepo.save(group);
      return group;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try{
      const group = await this.groupRepo.findOne({
        where:{
          id
        }
      });
      if(!group){
        throw new NotFoundException(`Group with id ${id} not found`);
      }else{
        await this.groupRepo.delete(id);
        return {
          message: "El grupo se ha eliminado"
        }
      }
      
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }

  async active(id:number){
    try{
      const group = await this.groupRepo.findOne({
        where:{
          id //Como se llaman igual lo dejamos así, de otra forma seria id:nombre
        }
      });
      const groupUpdate = await this.groupRepo.preload({
        id,
        is_active: !group.is_active
      })
      await this.groupRepo.save(groupUpdate);
      return groupUpdate;
    }
    catch(error){
      throw new InternalServerErrorException(error);
    }
  }
}
