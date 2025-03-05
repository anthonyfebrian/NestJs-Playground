import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RolesService } from './roles.service';
import { ROLE_PATTERNS } from '@app/shared/user-management/roles/roles.patterns';

@Controller('roles')
export class RolesController {

    constructor(private service: RolesService) { }

    @MessagePattern(ROLE_PATTERNS.FIND_ALL)
    findAll() {
        console.log('Microservices: This action returns all roles');
        return this.service.findAll();
    }

    @MessagePattern(ROLE_PATTERNS.FIND_ONE)
    findOne(@Payload() id: number) {
        return this.service.findOne(id);
    }
}
