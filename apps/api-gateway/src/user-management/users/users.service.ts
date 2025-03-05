import { USERS_PATTERNS } from '@app/shared/user-management/users/users.patterns';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {

    constructor(
        @Inject(`${process.env.USER_MANAGEMENT_SERVICE}`) private readonly client: ClientProxy
    ) { }

    async findAll() {
        return this.client.send(USERS_PATTERNS.FIND_ALL, {})
    }

    findOne(id: number) {
        return this.client.send(USERS_PATTERNS.FIND_ONE, id)
    }
}
