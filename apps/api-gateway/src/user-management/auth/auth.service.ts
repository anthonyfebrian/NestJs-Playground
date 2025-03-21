import { AUTH_PATTERNS } from '@app/shared/user-management/auth/auth.patterns';
import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, timeout } from 'rxjs';
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

  logout(tokenPayload: any) {
    return this.client
      .send(AUTH_PATTERNS.LOGOUT, tokenPayload)
      .pipe(timeout(10000))
      .pipe(catchCustomException())
  }

  isTokenBlacklisted(tokenId: string):Observable<Boolean> {
    return this.client
      .send(AUTH_PATTERNS.IS_TOKEN_BLACKLISTED, tokenId)
      .pipe(timeout(10000))
      .pipe(catchCustomException())
  }
}
