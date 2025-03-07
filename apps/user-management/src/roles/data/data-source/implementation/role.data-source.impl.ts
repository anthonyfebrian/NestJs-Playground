import { Observable } from "rxjs";
import { RoleEntity } from "../../entities/role.entity";
import { RoleDataSource } from "../role.data-source";
import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class RoleDataSourceImpl implements RoleDataSource {
    constructor(
        @InjectRepository(RoleEntity) 
        private readonly repository:Repository<RoleEntity>
    ) { }

    findAll(): Promise<RoleEntity[]> {
        return this.repository.find()
    }

    async findOne(id: number): Promise<RoleEntity> {
        const role = await this.repository.findOneBy({ id });
        if (!role) {
            throw new RpcException(`Role with id ${id} not found`);
        }
        return role;
    }
}