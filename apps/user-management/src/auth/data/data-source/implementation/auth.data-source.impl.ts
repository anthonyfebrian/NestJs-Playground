import { RpcUnauthorizedException } from "@app/shared/user-management/utils/exception/rpc-unauthorized.exception";
import { Inject, Injectable } from "@nestjs/common";
import { UserDataSource } from "apps/user-management/src/users/data/data-source/users.data-source";
import { UserEntity } from "apps/user-management/src/users/data/entities/user.entity";
import * as bcrypt from 'bcrypt';
import { AuthDataSource } from "../auth.data-source";

@Injectable()
export class AuthDataSourceImpl implements AuthDataSource {
    constructor(
        @Inject('UserDataSource') private readonly userDataSource: UserDataSource
    ) { }
    
    async login(email: string, password: string): Promise<UserEntity> {
        console.log(`${email} : ${password}`)
        const user = await this.userDataSource.findByEmail(email)
        if (!user) {
            console.log('user not found')
            throw new RpcUnauthorizedException("Email atau password salah")
        }
        const hashedPassword = user.password ?? ''
        console.log('hashed: ' + hashedPassword)
        const isMatch = await bcrypt.compare(password, hashedPassword)
        if (!isMatch) {
            console.log('Email atau password salah')
            throw new RpcUnauthorizedException("Email atau password salah")
        }

        return user
    }
}