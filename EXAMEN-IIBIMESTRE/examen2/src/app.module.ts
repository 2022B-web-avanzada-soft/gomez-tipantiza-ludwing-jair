import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BrandEntity} from "./brand/brand.entity";
import {WatchEntity} from "./watch/watch.entity";
import {WatchModule} from "./watch/watch.module";
import {BrandModule} from "./brand/brand.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/Base.sqlite',
      entities: [
          BrandEntity,
          WatchEntity
      ], // entidades de TOODOO el aplicativo
      synchronize: true, // true => edita las columnas y tablas // false => nada
      dropSchema: false, // true => borra toda la base de datos! cuidado! // false => nada
    }),
      BrandModule,
      WatchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
