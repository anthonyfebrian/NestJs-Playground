import { Controller, Get } from '@nestjs/common';
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
    findOne(id: number) {
        return this.service.findOne(id);
    }
}
