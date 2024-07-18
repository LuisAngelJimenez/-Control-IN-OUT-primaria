import { Module } from '@nestjs/common';
import { TutorsService } from './tutors.service';
import { TutorsController } from './tutors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './entities/tutor.entity';

@Module({
  controllers: [TutorsController],
  providers: [TutorsService],
  imports: [TypeOrmModule.forFeature([Tutor])]
})
export class TutorsModule {}
