import { Prisma } from '@prisma/client';
import { Task } from 'src/task/entities/task.entity';

export class User {
  name: string;
  tasks?: Task[];
}
