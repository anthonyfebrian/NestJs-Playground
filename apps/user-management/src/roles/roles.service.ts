import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {

    findAll() {
        console.log('Microservices: This action returns all roles');
        return 'Microservices: This action returns all roles';
    }
}
