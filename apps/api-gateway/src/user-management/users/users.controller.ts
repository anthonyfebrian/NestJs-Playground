import { CreateUserDto } from '@app/shared/user-management/users/dto/create-user.dto';
import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';


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

    @UseGuards(JwtAuthGuard)
    @Get("profile/me")
    getProfile(@Request() request) {
        const tokenPayload = request.user
        const id = tokenPayload.id
        return this.service.findOne(id)
    }
}
