import { AUTH_PATTERNS } from '@app/shared/user-management/auth/auth.patterns';
import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';
import { catchCustomException } from '../../utils/catch-custom-exception';

@Injectable()
export class AuthService {

  constructor(
    @Inject('USER_MANAGEMENT_SERVICE') private readonly client: ClientProxy
  ) { }

  login(loginDto: LoginDto) {
    return this.client
      .send(AUTH_PATTERNS.LOGIN, loginDto)
      .pipe(timeout(10000))
      .pipe(catchCustomException())
  }
}
