import { PrismaService } from 'prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    update(id: number, data: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
}
