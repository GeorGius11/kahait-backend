import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizInput } from './dto/create-quiz.input';
import { UpdateQuizInput } from './dto/update-quiz.input';
import { AssignTagsToQuizInput } from './dto/assign-tags-to-quiz.input';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelectService } from 'src/prisma/prisma-select.service';

@Injectable()
export class QuizzesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelectService: PrismaSelectService,
  ) {}

  create(createQuizInput: CreateQuizInput) {
    return this.prisma.quiz.create({ data: createQuizInput });
  }

  findOneById(id: number, info?: GraphQLResolveInfo) {
    const select = this.prismaSelectService.getValue(info);

    return this.prisma.quiz.findUnique({
      where: {
        id,
      },
      ...select,
    });
  }

  findAll(info?: GraphQLResolveInfo) {
    const select = this.prismaSelectService.getValue(info);
    return this.prisma.quiz.findMany({ ...select });
  }

  update(updateQuizData: UpdateQuizInput) {
    const { id, ...data } = updateQuizData;
    return this.prisma.quiz.update({ where: { id }, data: data });
  }

  delete(id: number) {
    return this.prisma.quiz.delete({ where: { id } });
  }

  assignTags(assignTagsInput: AssignTagsToQuizInput) {
    const { quizId, tagIds } = assignTagsInput;

    return this.prisma.quiz.update({
      where: { id: quizId },
      data: {
        tags: {
          connect: tagIds.map((id) => ({ id })),
        },
      },
    });
  }
}
