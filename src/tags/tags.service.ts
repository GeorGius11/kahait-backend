import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  createTag(createTagData: CreateTagInput) {
    return this.prisma.tag.create({ data: createTagData });
  }

  updateTag(updateTagData: UpdateTagInput) {
    const { id, ...data } = updateTagData;
    return this.prisma.tag.update({ where: { id }, data: data });
  }

  deleteTag(id: number) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
