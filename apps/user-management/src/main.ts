import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './user-management.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserManagementModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:3001'],
        queue: 'users_management_queue',
        queueOptions: {
          durable: false
        },
      }
    },
  );
  await app.listen();
}
bootstrap();
