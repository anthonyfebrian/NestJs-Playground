import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableVersioning(
    {
      type: VersioningType.URI,
      defaultVersion: '1.0',
    }
  )
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
