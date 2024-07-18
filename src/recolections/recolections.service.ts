import { Injectable } from '@nestjs/common';
import { CreateRecolectionDto } from './dto/create-recolection.dto';
import { UpdateRecolectionDto } from './dto/update-recolection.dto';

@Injectable()
export class RecolectionsService {
  create(createRecolectionDto: CreateRecolectionDto) {
    return 'This action adds a new recolection';
  }

  findAll() {
    return `This action returns all recolections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recolection`;
  }

  update(id: number, updateRecolectionDto: UpdateRecolectionDto) {
    return `This action updates a #${id} recolection`;
  }

  remove(id: number) {
    return `This action removes a #${id} recolection`;
  }
}
