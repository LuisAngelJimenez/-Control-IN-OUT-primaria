import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpCode, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, BadRequestException } from '@nestjs/common';
import { TutorsService } from './tutors.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('tutors')
export class TutorsController {
  constructor(private readonly tutorsService: TutorsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(201)
  
  create(@Body() createTutorDto: CreateTutorDto, @Body('folder') folder: string, @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), 
        new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }), 
      ],
    }),
  ) file: Express.Multer.File) {
    if (!folder) {
      throw new BadRequestException('Folder not specified')
    }
    //return 'hola mundo'
    return this.tutorsService.create(createTutorDto, file, folder);
  }

  @Get()
  findAll() {
    return this.tutorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutorDto: UpdateTutorDto) {
    return this.tutorsService.update(+id, updateTutorDto);
  }
  
  @Patch(':id/active')
  active(@Param('id') id: string) {
    return this.tutorsService.active(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorsService.remove(+id);
  }
}
