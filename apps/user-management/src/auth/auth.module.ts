import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthDataSourceImpl } from './data/data-source/implementation/auth.data-source.impl';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    ConfigModule.forRoot(),
    UsersModule,
    JwtModule.register(
      {
        global: true,
        secret: process.env.USER_MANAGEMENT_JWT_SECRET,
        signOptions: {
          expiresIn: '1d'
        }
      }
    )
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AuthDataSource',
      useClass: AuthDataSourceImpl,
    }
  ]
})
export class AuthModule { }
