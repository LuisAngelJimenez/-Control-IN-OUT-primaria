import { Module } from '@nestjs/common';
import { RecolectionsService } from './recolections.service';
import { RecolectionsController } from './recolections.controller';

@Module({
  controllers: [RecolectionsController],
  providers: [RecolectionsService],
})
export class RecolectionsModule {}
