import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthDataSourceImpl } from './data/data-source/implementation/auth.data-source.impl';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[UsersModule],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AuthDataSource',
      useClass: AuthDataSourceImpl,
    }
  ]
})
export class AuthModule { }
