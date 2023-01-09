/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { CreateUserDto, UpdateUserDto } from './dto/user-dto';
import { UserService } from './user.service';

@Controller('usr')
export class UserController {

    constructor(private readonly userservice: UserService) {

    }

    @Post('register')
    register(@Body() userdto: CreateUserDto) {
        return this.userservice.register(userdto);
    }

    @Get('one')
    getuserbyid(@Query() id) {
        console.log('id: ',id);
        return this.userservice.getuserbyid(id.id);
    }

    @Get()
    getalluser() {
        console.log('getalluser: ');
        return this.userservice.getalluser();
    }

    @Post('update')
    updateuser(@Body() userdto: UpdateUserDto) {
        return this.userservice.updateuser(userdto);
    }

}
