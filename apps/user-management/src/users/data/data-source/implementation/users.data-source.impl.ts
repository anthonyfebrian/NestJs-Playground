import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "../../entities/user.entity";
import { UserDataSource } from "../users.data-source";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserDataSourceImpl implements UserDataSource {
    constructor(
        @InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
    ) { }
    findAll(): Promise<UserEntity[]> {
        return this.repository.find()
    }

    async findOne(id: number): Promise<UserEntity> {
        const user = await this.repository.findOneBy({ id })
        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user
    }
}