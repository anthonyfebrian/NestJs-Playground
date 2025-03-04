import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {

    findAll() {
        return 'ApiGateway: This action returns all roles';
    }
}
