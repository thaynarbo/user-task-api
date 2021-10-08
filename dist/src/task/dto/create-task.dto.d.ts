import { Task } from '../entities/task.entity';
export declare class CreateTaskDto extends Task {
    description: string;
    done: boolean;
    userId: number;
}
