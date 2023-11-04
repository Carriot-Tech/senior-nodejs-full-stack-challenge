import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GatewayModule } from './services/gateway/gateway.module';
import { AuthModule } from './services/auth/auth.module';
import { AppFactory, SERVICE_TYPE } from './types';

const gatewayApp: AppFactory = async () => {
  const app = await NestFactory.create(GatewayModule);
  const swaggerConfig = new DocumentBuilder().setTitle('Gateway').build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, swaggerDocument);
  app.enableCors({
    origin: '*',
  });
  await app.listen(4000);
  return app;
};

const authApp: AppFactory = async () => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://nats:4222'],
      },
    },
  );
  app.listen();
  return app;
};

export const SERVICES: Record<SERVICE_TYPE, AppFactory> = {
  [SERVICE_TYPE.AUTH]: authApp,
  [SERVICE_TYPE.GATEWAY]: gatewayApp,
};
