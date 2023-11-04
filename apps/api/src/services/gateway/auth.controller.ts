import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInDto } from '../auth/dto/sign-in.dto';
import { SignUpDto } from '../auth/dto/sign-up.dto';
import { AUTH_SERVICE } from './constants';
import { ResponseInterceptor } from './response-interceptor';

@ApiTags('Auth')
@Controller('auth')
@UseInterceptors(ResponseInterceptor)
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE)
    private readonly authServiceClientProxy: ClientProxy,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  @ApiOperation({ summary: 'Enter your emile and password to sign in' })
  @ApiBody({ type: SignInDto })
  @ApiResponse({
    status: 200,
    description: 'The succeed sign in',
    type: SignInDto,
  })
  signIn(@Body() signInDto: SignInDto) {
    return this.authServiceClientProxy.send('sign_in', signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  @ApiOperation({ summary: 'Enter your email and password to sign up' })
  @ApiResponse({
    status: 200,
    description: 'The succeed sign up',
    type: SignUpDto,
  })
  @ApiBody({ type: SignUpDto })
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authServiceClientProxy.send('sign_up', signUpDto);
  }
}
