import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
