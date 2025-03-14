import { AUTH_PATTERNS } from '@app/shared/user-management/auth/auth.patterns';
import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { USERS_PATTERNS } from '@app/shared/user-management/users/users.patterns';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    // @Inject(`${process.env.USER_MANAGEMENT_SERVICE}`) private readonly client: ClientProxy
  ) { }


  login(loginDto: LoginDto) {
    return loginDto
    // return this.client.send(AUTH_PATTERNS.LOGIN, { loginDto })
  }
}
