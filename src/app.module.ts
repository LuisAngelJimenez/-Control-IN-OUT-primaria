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
import { RecolectionsModule } from './recolections/recolections.module';
import { EmployeModule } from './employe/employe.module';
import { Recolection } from './recolections/entities/recolection.entity';
import { Employe } from './employe/entities/employe.entity';


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
    entities: [Group, Kid, Tutor, Recolection, Employe],
}), KidsModule, GroupsModule, TutorsModule, RecolectionsModule, EmployeModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}