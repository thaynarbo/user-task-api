import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    findAll(id: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
}
