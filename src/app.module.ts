import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KidsModule } from './kids/kids.module';
import { GroupsModule } from './groups/groups.module';
import { TutorsModule } from './tutors/tutors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './groups/entities/group.entity';
import { Kid } from './kids/entities/kid.entity';
import { Tutor } from './tutors/entities/tutor.entity';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'',
    database:'in_out',
    autoLoadEntities:true,
    synchronize: true,
    entities: [Group, Kid, Tutor],
}), KidsModule, GroupsModule, TutorsModule, CloudinaryModule,
    ConfigModule.forRoot({ isGlobal: true})
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
