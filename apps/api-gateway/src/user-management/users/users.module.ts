import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
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
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
