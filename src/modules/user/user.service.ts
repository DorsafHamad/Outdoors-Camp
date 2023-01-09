/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto/user-dto';
import { UserDocument } from './model/user';

@Injectable()
export class UserService {



    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) {

    }
    async register(userdto: CreateUserDto) {
        const newuser = new this.userModel(userdto);
        return await newuser.save();
    }

    async getalluser() {
        const findeduser = await this.userModel.find();
        return findeduser;
    }

    async getuserbyid(id: string) {
        const findeduser = await this.userModel.findById({ _id: id });
        return findeduser;
    }

    async updateuser(userdto: UpdateUserDto) {
        const user = await this.userModel.findByIdAndUpdate({ _id: userdto._id }, userdto);
    }
}
