import { AUTH_PATTERNS } from '@app/shared/user-management/auth/auth.patterns';
import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthDataSource } from './data/data-source/auth.data-source';

@Controller('auth')
export class AuthController {

    constructor(
        @Inject('AuthDataSource') private readonly authDataSource:AuthDataSource
    ){ }

    @MessagePattern(AUTH_PATTERNS.LOGIN)
    login(@Payload() dto: LoginDto) {
        return this.authDataSource.login(dto.email, dto.password)
    }
}
