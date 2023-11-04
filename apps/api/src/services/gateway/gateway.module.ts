import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigurationModule } from 'src/modules/configuration/configuration.module';
import { AuthController } from './auth.controller';
import { AUTH_SERVICE } from './constants';
import { ResponseInterceptor } from './response-interceptor';

@Module({
  imports: [
    ConfigurationModule,
    ClientsModule.register([
      {
        name: AUTH_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: ['nats://nats:4222'],
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [ResponseInterceptor],
})
export class GatewayModule {}
