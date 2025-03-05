import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ConfigModule } from '@nestjs/config';

import { UserManagementModule } from './user-management/user-management.module';
import { ClientModule } from './user-management/shared/client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientModule,
    UserManagementModule
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule { }
