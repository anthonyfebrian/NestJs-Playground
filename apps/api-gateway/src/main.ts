import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ValidationError, ValidationPipe, VersioningType } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ValidationExceptionFactory } from '@app/shared/user-management/utils/validator/validation-exception.factory';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  // app.useLogger(app.get(Logger));
  app.enableVersioning(
    {
      type: VersioningType.URI,
      defaultVersion: '1.0',
    }
  )
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      return ValidationExceptionFactory.createBadRequestException(validationErrors);
    }
  }))
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
