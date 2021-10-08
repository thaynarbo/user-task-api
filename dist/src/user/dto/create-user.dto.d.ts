import { CreateTaskDto } from 'src/task/dto/create-task.dto';
import { User } from '../entities/user.entity';
export declare class CreateUserDto implements User {
    name: string;
    tasks?: CreateTaskDto[];
}
