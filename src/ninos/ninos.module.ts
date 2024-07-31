import { Module } from '@nestjs/common';
import { NinosService } from './ninos.service';
import { NinosController } from './ninos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nino } from './entities/nino.entity';

@Module({
  controllers: [NinosController],
  providers: [NinosService],
  imports: [TypeOrmModule.forFeature([Nino])]
})
export class NinosModule {}
