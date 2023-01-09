import { RandoService } from './rando.service';
import { RandoController } from './rando.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RandoSchema } from './model/rando';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'rando', schema: RandoSchema }
          ])
    ],
    controllers: [
        RandoController,],
    providers: [
        RandoService,],
})
export class RandoModule { }
