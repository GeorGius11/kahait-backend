import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaSelectService } from './prisma-select.service';

@Module({
  providers: [PrismaService, PrismaSelectService],
  exports: [PrismaService, PrismaSelectService],
})
export class PrismaModule {}
