import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NinosModule } from './ninos/ninos.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
  username:'root',
  password:'',
  database:'alumnos',
  autoLoadEntities:true,
  synchronize: true

}),
  
  NinosModule,
  ],
})
export class AppModule {}
