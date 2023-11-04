import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  signIn(signInDto: SignInDto) {
    return this.userModel.findOne({ email: signInDto.email }).then((user) => {
      if (!user || user?.password !== signInDto.password) {
        throw new RpcException('Invalid credentials');
      }
      return {
        access_token: this.jwtService.sign({
          id: user.id,
          email: user.email,
        }),
      };
    });
  }

  signUp(signUpDto: SignUpDto) {
    return this.userModel.findOne({ email: signUpDto.email }).then((user) => {
      if (user) {
        throw new RpcException('Duplicate Email');
      }
      const newUser = new this.userModel(signUpDto);
      return newUser.save();
    });
  }
}
