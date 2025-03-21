import { AUTH_PATTERNS } from '@app/shared/user-management/auth/auth.patterns';
import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { Controller, Inject, NotImplementedException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthDataSource } from './data/data-source/auth.data-source';
import { BlacklistTokenDataSource } from './data/data-source/blacklist-token.data-source';

@Controller('auth')
export class AuthController {

    constructor(
        @Inject('AuthDataSource') private readonly authDataSource:AuthDataSource,
        @Inject('BlacklistTokenDataSource') private readonly blacklistTokenDataSource:BlacklistTokenDataSource
    ){ }

    @MessagePattern(AUTH_PATTERNS.LOGIN)
    login(@Payload() dto: LoginDto) {
        return this.authDataSource.login(dto.email, dto.password)
    }

    @MessagePattern(AUTH_PATTERNS.LOGOUT)
    logout(@Payload() tokenPayload:any) {
        return this.blacklistTokenDataSource.addToken(tokenPayload)
    }

    @MessagePattern(AUTH_PATTERNS.IS_TOKEN_BLACKLISTED)
    isTokenBlacklisted(@Payload() tokenId:string) {
        return this.blacklistTokenDataSource.isTokenBlacklisted(tokenId)
    }
}
