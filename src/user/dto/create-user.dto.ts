import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
  IsArray,
  Length,
} from 'class-validator';
import { CreateTaskDto } from 'src/task/dto/create-task.dto';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  @IsString()
  @IsNotEmpty()
  @Length(1, 40)
  name: string;
}
