import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './user-management.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    UserManagementModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      },
    },
  );
  await app.listen();
}
bootstrap();
