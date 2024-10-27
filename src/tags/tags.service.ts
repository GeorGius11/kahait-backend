import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelectService } from 'src/prisma/prisma-select.service';

@Injectable()
export class TagsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService,
  ) {}

  createTag(createTagData: CreateTagInput) {
    return this.prisma.tag.create({ data: createTagData });
  }

  getAllTags(info?: GraphQLResolveInfo) {
    const select = this.prismaSelect.getValue(info);
    return this.prisma.tag.findMany(...select);
  }

  updateTag(updateTagData: UpdateTagInput) {
    const { id, ...data } = updateTagData;
    return this.prisma.tag.update({ where: { id }, data: data });
  }

  deleteTag(id: number) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
