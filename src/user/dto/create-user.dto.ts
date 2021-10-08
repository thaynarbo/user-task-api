import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
  IsArray,
} from 'class-validator';
import { CreateTaskDto } from 'src/task/dto/create-task.dto';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested({ each: true })
  @Type(() => CreateTaskDto)
  @IsArray()
  @IsOptional()
  tasks?: CreateTaskDto[];
}
