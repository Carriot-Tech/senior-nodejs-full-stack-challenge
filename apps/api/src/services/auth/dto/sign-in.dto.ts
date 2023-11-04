import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty({ default: 'example@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: 'example' })
  @IsNotEmpty()
  password: string;
}
