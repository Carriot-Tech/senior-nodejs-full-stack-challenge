import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller()
export class AuthController {
  constructor(private readonly userService: AuthService) {}

  @MessagePattern('sign_in')
  signIn(@Payload() signInDto: SignInDto) {
    return this.userService.signIn(signInDto);
  }

  @MessagePattern('sign_up')
  signUp(@Payload() signUpDto: SignUpDto) {
    return this.userService.signUp(signUpDto);
  }
}
