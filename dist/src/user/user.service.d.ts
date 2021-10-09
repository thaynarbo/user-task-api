import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    findOne(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    update(id: number, dto: UpdateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
