import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "../../entities/user.entity";
import { UserDataSource } from "../users.data-source";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { RoleEntity } from "apps/user-management/src/roles/data/entities/role.entity";

@Injectable()
export class UserDataSourceImpl implements UserDataSource {
    constructor(
        @InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
    ) { }
    
    async create(email: string, password: string, firstName: string, lastName: string): Promise<UserEntity> {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = new UserEntity()
        user.email = email
        user.password = hashedPassword
        user.firstName = firstName
        user.lastName = lastName
        user.role = { id: 2 } as RoleEntity

        return this.repository.save(user)
    }
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

    findByEmail(email: string): Promise<UserEntity | null> {
        return this.repository.findOneBy({
            email: email,
        })
    }
}