import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagInput } from './dto/create-tag.input';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  createTag(createTagData: CreateTagInput) {
    return this.prisma.tag.create({ data: createTagData });
  }
}
