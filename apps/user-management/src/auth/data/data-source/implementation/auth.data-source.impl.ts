import { RpcUnauthorizedException } from "@app/shared/user-management/utils/exception/rpc-unauthorized.exception";
import { Inject, Injectable } from "@nestjs/common";
import { UserDataSource } from "apps/user-management/src/users/data/data-source/users.data-source";
import { UserEntity } from "apps/user-management/src/users/data/entities/user.entity";
import * as bcrypt from 'bcrypt';
import { AuthDataSource } from "../auth.data-source";
import { JwtService } from "@nestjs/jwt";
import { LoginEntity } from "../../entity/login.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthDataSourceImpl implements AuthDataSource {
    constructor(
        @Inject('UserDataSource') private readonly userDataSource: UserDataSource,
        @Inject() private readonly jwtService:JwtService
    ) { }
    
    async login(email: string, password: string): Promise<LoginEntity> {
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

        const token = await this.generateToken(user)
        console.log('token : ' + token)

        return new LoginEntity(user, token)
    }

    async generateToken(user:UserEntity): Promise<string> {
        const tokenPayload = {
            id: user.id,
            email: user.email,
            tokenId: uuidv4()
        }

        const accessToken = await this.jwtService.signAsync(tokenPayload)
        return accessToken
    }
}