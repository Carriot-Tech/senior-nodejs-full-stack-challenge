import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ConfigurationModule } from 'src/modules/configuration/configuration.module';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './schemas/user.schema';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigurationModule,
    MongooseModule.forRoot('mongodb://root:example@mongo:27017/user'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
