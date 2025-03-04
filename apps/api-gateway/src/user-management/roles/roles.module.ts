import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
          {
            name: 'USER_MANAGEMENT_SERVICE',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'users-management-queue',
              queueOptions: {
                durable: false
              }
            }
          }
        ])
  ],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
