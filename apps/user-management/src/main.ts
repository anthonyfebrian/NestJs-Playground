import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './user-management.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserManagementModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`${process.env.USER_MANAGEMENT_SERVICE_URL}`],
        queue: `${process.env.USER_MANAGEMENT_QUEUE}`,
        queueOptions: {
          durable: false
        },
      }
    },
  );
  await app.listen();
}
bootstrap();
