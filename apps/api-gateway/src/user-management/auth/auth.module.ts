import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientModule } from '../shared/client/client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClientModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
