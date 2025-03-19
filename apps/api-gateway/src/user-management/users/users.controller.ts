import { Body, Controller, Get, Request, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '@app/shared/user-management/users/dto/create-user.dto';
import { AuthGuard } from '../auth/guards/auth.guards';


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

    @UseGuards(AuthGuard)
    @Get("profile/me")
    getProfile(@Request() request) {
        console.log('tokenPayload', request.tokenPayload)
        const tokenPayload = request.tokenPayload
        const id = tokenPayload.id
        return this.service.findOne(id)
    }
}
