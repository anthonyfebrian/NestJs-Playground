import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USER_MANAGEMENT_SERVICE') private readonly client: ClientProxy
    ) { }

    async findAll() {
        return this.client.send('findAllUsers', {})
    }

    findOne(id: number) {
        return this.client.send('findOneUser', id)
    }
}
