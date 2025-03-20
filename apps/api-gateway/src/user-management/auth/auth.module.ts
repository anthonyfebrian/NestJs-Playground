import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientModule } from '../shared/client/client.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';



@Module({
  imports: [
    ClientModule,
    UsersModule,
    JwtModule.register(
          {
            global: true,
            secret: process.env.USER_MANAGEMENT_JWT_SECRET,
            signOptions: {
              expiresIn: '1d'
            }
          }
        ),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    LocalStrategy, JwtStrategy, //Passport Strategies
  ],
})
export class AuthModule { }
