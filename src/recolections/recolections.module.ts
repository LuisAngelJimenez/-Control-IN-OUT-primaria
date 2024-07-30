import { Module } from '@nestjs/common';
import { RecolectionsService } from './recolections.service';
import { RecolectionsController } from './recolections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recolection } from './entities/recolection.entity';

@Module({
  controllers: [RecolectionsController],
  providers: [RecolectionsService],
  imports: [TypeOrmModule.forFeature([Recolection])]
})
export class RecolectionsModule {}
