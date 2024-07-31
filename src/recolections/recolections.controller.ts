import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecolectionsService } from './recolections.service';
import { CreateRecolectionDto } from './dto/create-recolection.dto';
import { UpdateRecolectionDto } from './dto/update-recolection.dto';

@Controller('recolections')
export class RecolectionsController {
  constructor(private readonly recolectionsService: RecolectionsService) {}

  @Post()
  create(@Body() createRecolectionDto: CreateRecolectionDto) {
    return this.recolectionsService.create(createRecolectionDto);
  }

  @Get()
  findAll() {
    return this.recolectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recolectionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecolectionDto: UpdateRecolectionDto) {
    return this.recolectionsService.update(+id, updateRecolectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recolectionsService.delete(+id);
  }

}
