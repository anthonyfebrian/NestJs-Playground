import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private repository: Repository<Role>
    ) { }

    findAll() {
        return this.repository.find()
    }

    findOne(id: number) {
        return this.repository.findOneBy({ id })

    }
}
