import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthDataSourceImpl } from './data/data-source/implementation/auth.data-source.impl';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import Redis from 'ioredis';
import { hostname } from 'os';
import { BlacklistTokenDataSourceImpl } from './data/data-source/implementation/blacklist-token.data-source.impl';

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
      provide:"REDIS_CLIENT",
      useFactory: () => { return new Redis(
        {
          host: process.env.USER_MANAGEMENT_REDIS_HOST || '127.0.0.1',
          port: parseInt(process.env.USER_MANAGEMENT_REDIS_PORT || '6379'),
          password: process.env.USER_MANAGEMENT_REDIS_PASSWORD || undefined,
        }
      ) }
    },
    {
      provide: 'AuthDataSource',
      useClass: AuthDataSourceImpl,
    },
    {
      provide: 'BlacklistTokenDataSource',
      useClass: BlacklistTokenDataSourceImpl
    }
  ]
})
export class AuthModule { }
