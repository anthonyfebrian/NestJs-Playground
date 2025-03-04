import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RolesService {
    constructor(
        @Inject('USER_MANAGEMENT_SERVICE') private readonly client: ClientProxy) { }

    async findAll() {
        // return this.client.send('helloUserManagement', {})
        return this.client.send('getRoles', {})
    }
}
