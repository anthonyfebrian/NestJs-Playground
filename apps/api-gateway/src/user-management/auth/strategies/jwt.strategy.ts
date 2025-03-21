
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.USER_MANAGEMENT_JWT_SECRET}`,
    });
  }

  async validate(payload: any) {
    console.log("validate payload", payload)

    const tokenId = payload.tokenId;
    const expired = await this.authService.isTokenBlacklisted(tokenId).toPromise();

    if (expired) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}