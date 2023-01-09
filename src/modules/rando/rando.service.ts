/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { diskStorage } from 'multer';
import path from 'path';
import { CreateRandoDto, UpdateRandoDto } from './dto/rando-dto';
import { RandoDocument } from './model/rando';



@Injectable()
export class RandoService {
    


    constructor(@InjectModel('rando') private readonly randoModel: Model<RandoDocument>) {
    }

    async addRando(createRandoDto: CreateRandoDto) {
        const createObject = new this.randoModel(createRandoDto)
        return await createObject.save();
    }
    async updateRando(updateRandoDto: UpdateRandoDto) {
        const updateOptions = { upsert: true, new: true };
        //const rando = await this.randoModel.updateOne({ _id: updateRandoDto._id }, updateRandoDto, updateOptions);
        const rando = await this.randoModel.findByIdAndUpdate({ _id: updateRandoDto._id }, updateRandoDto, updateOptions);
        return rando;
    }
    async getRandoById(id: any) {
        return await this.randoModel.findById({ _id: id }).exec();
    }

    async getAllRando() {
        return await this.randoModel.find().exec();
    }

    async updateRandoWithPhoto(_id: string, arg1: { path: string; filename: string; mimetype: string; }) {
        const file = arg1;
        const findedrando = await this.randoModel.findById({_id:_id});
        console.log('rando:',findedrando);
        const newobj: UpdateRandoDto = {_id: findedrando._id, photo: file.path+'.jpg', adress: findedrando.adress, location: findedrando.location }
        console.log('message:',newobj);
        const rando = await this.randoModel.findByIdAndUpdate({ _id:_id }, newobj);
        return await rando;


    }
}
