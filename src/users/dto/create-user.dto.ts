import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  nombres: string;
  @IsNotEmpty()
  apellidos: string;
  @IsNotEmpty()
  @IsNumber()
  cedula: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
