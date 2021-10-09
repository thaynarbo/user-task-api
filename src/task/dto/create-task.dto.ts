import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Task } from '../entities/task.entity';

export class CreateTaskDto extends Task {
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsBoolean()
  @IsNotEmpty()
  done: boolean;
  @IsInt()
  userId: number;
}
