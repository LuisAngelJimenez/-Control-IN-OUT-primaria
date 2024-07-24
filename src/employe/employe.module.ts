import { Module } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { EmployeController } from './employe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employe } from './entities/employe.entity';

@Module({
  controllers: [EmployeController],
  providers: [EmployeService],
  imports: [TypeOrmModule.forFeature([Employe])]
})
export class EmployeModule {}
