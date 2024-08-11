import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpCode, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, BadRequestException } from '@nestjs/common';
import { KidsService } from './kids.service';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidDto } from './dto/update-kid.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('kids')
export class KidsController {
  constructor(private readonly kidsService: KidsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(201)
  create(@Body() createKidDto: CreateKidDto, @Body('folder') folder: string, @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), 
        new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }), 
      ],
    }),
  ) file: Express.Multer.File,
  @Body('tutorId') tutorId?: number) {
    
    if (!folder) {
      throw new BadRequestException('Folder is required');
    }
    return this.kidsService.create(createKidDto, file, folder, tutorId);
  }

  @Get()
  findAll() {
    return this.kidsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kidsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKidDto: UpdateKidDto, @Body('tutorId') tutorId?: number) {
    return this.kidsService.update(+id, updateKidDto, tutorId);
  }

  @Patch(':id/active')
  active(@Param('id') id: string) {
    return this.kidsService.active(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kidsService.remove(+id);
  }
}
