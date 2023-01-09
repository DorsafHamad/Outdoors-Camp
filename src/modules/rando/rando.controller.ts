/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Query, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { create } from 'domain';
import { diskStorage } from 'multer';
import path from 'path';
import { CreateRandoDto, UpdateRandoDto } from './dto/rando-dto';
import { RandoService } from './rando.service';

@Controller('rando')
export class RandoController {

    constructor(private randoService: RandoService) {

    }

    @Post('add-rando')
    addRando(@Body() createRandoDto: CreateRandoDto) {
        return this.randoService.addRando(createRandoDto);
    }
    @Post('update-rando')
    updateRando(@Body() updateRandoDto: UpdateRandoDto) {
        return this.randoService.updateRando(updateRandoDto);
    }

    @Get()
    getRandoById(@Query() query) {
        return this.randoService.getRandoById(query.id);
    }

    @Get('allrando')
    getAllRando() {
        return this.randoService.getAllRando();
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
    }

    @Post('avatar')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploadedFiles/avatars',
            /*filename(req, file, callback) {
                const name = path.parse(file.originalname).name;

                const ext = path.parse(file.originalname).ext;
                callback(null, name + ext);
            },*/
        })
    }))
    async updateRandoWithPhoto(@Query() query, @UploadedFile() file: Express.Multer.File) {
        console.log('file: ', {
            path: file.path,
            filename: file.originalname,
            mimetype: file.mimetype
        })
        return this.randoService.updateRandoWithPhoto(query.id, {
            path: file.path,
            filename: file.originalname,
            mimetype: file.mimetype
        });
    }
}
