import { IsNotEmpty, IsEmail } from 'class-validator';

// to use validator we need to install class-validator and class-transformer
export class CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  age: number;
}
