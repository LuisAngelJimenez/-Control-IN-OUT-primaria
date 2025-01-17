import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NinosModule } from './ninos/ninos.module';

import { KidsModule } from './kids/kids.module';
import { GroupsModule } from './groups/groups.module';
import { TutorsModule } from './tutors/tutors.module';
import { Group } from './groups/entities/group.entity';
import { Kid } from './kids/entities/kid.entity';
import { Tutor } from './tutors/entities/tutor.entity';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './employees/employees.module';
import { RecolectionsModule } from './recolections/recolections.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'',
    database:'alumnos',
    autoLoadEntities:true,
    synchronize: true,
    entities: [Group, Kid, Tutor],
}), KidsModule, GroupsModule, TutorsModule, CloudinaryModule,
    ConfigModule.forRoot({ isGlobal: true}),
    EmployeesModule,
    RecolectionsModule,
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}