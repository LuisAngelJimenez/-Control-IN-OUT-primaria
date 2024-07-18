import { Module } from '@nestjs/common';
import { KidsService } from './kids.service';
import { KidsController } from './kids.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kid } from './entities/kid.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  controllers: [KidsController],
  providers: [KidsService, CloudinaryService],
  imports: [TypeOrmModule.forFeature([Kid])]
})
export class KidsModule {}
