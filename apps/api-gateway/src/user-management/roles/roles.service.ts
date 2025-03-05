import { ROLE_PATTERNS } from '@app/shared/user-management/roles/roles.patterns';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RolesService {

    constructor(
        @Inject(`${process.env.USER_MANAGEMENT_SERVICE}`) private readonly client: ClientProxy
    ) { }

    async findAll() {
        return this.client.send(ROLE_PATTERNS.FIND_ALL, {})
    }

    findOne(id: number) {
        return this.client.send(ROLE_PATTERNS.FIND_ONE, id)
    }
}

