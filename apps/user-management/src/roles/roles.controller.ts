import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private service:RolesService) { }

    @MessagePattern('getRoles')
    findAll() {
        console.log('Microservices: This action returns all roles');
        return this.service.findAll();
    }
}
