import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelectService } from 'src/prisma/prisma-select.service';

@Injectable()
export class AnswersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelectService: PrismaSelectService,
  ) {}

  create(createAnswerInput: CreateAnswerInput) {
    return this.prisma.answer.create({ data: createAnswerInput });
  }

  findAll(info?: GraphQLResolveInfo) {
    const select = this.prismaSelectService.getValue(info);

    return this.prisma.answer.findMany({
      ...select,
    });
  }

  update(updateAnswerData: UpdateAnswerInput) {
    const { id, ...data } = updateAnswerData;
    return this.prisma.answer.update({ where: { id }, data: data });
  }

  delete(id: number) {
    return this.prisma.answer.delete({ where: { id } });
  }
}
