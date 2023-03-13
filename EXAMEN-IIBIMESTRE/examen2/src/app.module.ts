import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name:'default',
      type: 'sqlite',
      database: './bdd/Base.sqlite',
      entities: [
      ], // entidades de TOODOO el aplicativo
      synchronize: true, // true => edita las columnas y tablas // false => nada
      dropSchema: false, // true => borra toda la base de datos! cuidado! // false => nada
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
