import { Injectable } from '@nestjs/common';
import { CreateRecolectionDto } from './dto/create-recolection.dto';
import { UpdateRecolectionDto } from './dto/update-recolection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recolection } from './entities/recolection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecolectionsService {
  constructor(
    @InjectRepository(Recolection)
    private readonly recolectionRepo: Repository<Recolection>,
) {}

async create(createRecolectionDto: CreateRecolectionDto): Promise<Recolection> {
    const recolection = new Recolection();
    recolection.date = new Date(createRecolectionDto.date);
    recolection.time = createRecolectionDto.hour;
    return this.recolectionRepo.save(recolection);
}

async findAll(): Promise<Recolection[]> {
    return this.recolectionRepo.find();
}

async findOne(id: number): Promise<Recolection> {
    return this.recolectionRepo.findOneBy({ id });
}

async update(id: number, updateRecolectionDto: UpdateRecolectionDto): Promise<Recolection> {
    const recolection = await this.recolectionRepo.findOneBy({ id });
    if (recolection) {
        recolection.date = new Date(updateRecolectionDto.date);
        recolection.time = updateRecolectionDto.hour;
        await this.recolectionRepo.save(recolection);
    }
    return recolection;
}

async delete(id: number): Promise<void> {
    await this.recolectionRepo.delete(id);
}
}
