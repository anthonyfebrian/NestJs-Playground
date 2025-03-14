import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '@app/shared/user-management/users/dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(
        private readonly service: UsersService
    ) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param() params: any) {
        return this.service.findOne(params.id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.service.create(createUserDto)
    }
}
