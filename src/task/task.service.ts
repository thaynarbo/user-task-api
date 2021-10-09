import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  findAll(id: number) {
    return this.prisma.task.findMany({ where: { userId: id } });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
