import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RolesService {

    constructor(
        @Inject(`${process.env.USER_MANAGEMENT_SERVICE}`) private readonly client: ClientProxy
    ) { }

    async findAll() {
        return this.client.send('getRoles', {})
    }

    findOne(id: number) {
        return this.client.send('findOneRole', id)
    }
}

