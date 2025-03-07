import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ROLE_PATTERNS } from '@app/shared/user-management/roles/roles.patterns';
import { RoleRepository } from '../domain/repository/role.repository';
import { GetRolesUseCase } from '../domain/use-case/get-roles.use-case';
import { GetOneRoleUseCase } from '../domain/use-case/get-one-role.use-case';

@Controller('roles')
export class RolesController {

    constructor(
        @Inject('GetRolesUseCase')
        private readonly getRolesUseCase: GetRolesUseCase,
        
        @Inject('GetOneRoleUseCase')
        private readonly getOneRoleUseCase: GetOneRoleUseCase,
        
    ) {
        console.log('Microservices: RolesController created');
     }

    @MessagePattern(ROLE_PATTERNS.FIND_ALL)
    findAll() {
        console.log('Microservices: This action returns all roles from usecase' + ROLE_PATTERNS.FIND_ALL);
        return this.getRolesUseCase.execute();
    }

    @MessagePattern(ROLE_PATTERNS.FIND_ONE)
    findOne(@Payload() id: number) {
        return this.getOneRoleUseCase.execute(id);
    }
}
