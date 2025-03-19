import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientModule } from '../shared/client/client.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ClientModule,
    JwtModule.register(
          {
            global: true,
            secret: process.env.USER_MANAGEMENT_JWT_SECRET,
            signOptions: {
              expiresIn: '1d'
            }
          }
        ),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
