import { Module } from '@nestjs/common';
import { KidsService } from './kids.service';
import { KidsController } from './kids.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kid } from './entities/kid.entity';

@Module({
  controllers: [KidsController],
  providers: [KidsService],
  imports: [TypeOrmModule.forFeature([Kid])]
})
export class KidsModule {}
