import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    tasks: {
      select: {
        id: true,
        description: true,
      },
    },
  };
  create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto,
      tasks: {
        create: dto.tasks,
      },
    };
    return this.prisma.user.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...dto,
      tasks: {
        create: dto.tasks,
      },
    };

    return this.prisma.user.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
