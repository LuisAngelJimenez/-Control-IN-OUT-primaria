import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NinosService } from './ninos.service';
import { CreateNinoDto } from './dto/create-nino.dto';
import { UpdateNinoDto } from './dto/update-nino.dto';

@Controller('ninos')
export class NinosController {
  constructor(private readonly ninosService: NinosService) {}

  @Post()
  create(@Body() createNinoDto: CreateNinoDto) {
    return this.ninosService.create(createNinoDto);
  }

  @Get()
  findAll() {
    return this.ninosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ninosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNinoDto: UpdateNinoDto) {
    return this.ninosService.update(+id, updateNinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ninosService.remove(+id);
  }
}
