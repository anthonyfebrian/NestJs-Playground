import { AUTH_PATTERNS } from '@app/shared/user-management/auth/auth.patterns';
import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {

    @MessagePattern(AUTH_PATTERNS.LOGIN)
    login(@Payload() dto: LoginDto) {
        return "Login microservice"
    }
}
