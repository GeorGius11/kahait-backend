import { Injectable } from '@nestjs/common';
import { CreateQuestionInput } from './dto/create-question.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateQuestionInput } from './dto/update-question.input';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  createQuestion(createQuestionInput: CreateQuestionInput) {
    return this.prisma.question.create({ data: createQuestionInput });
  }

  updateQuestion(updateQuestionData: UpdateQuestionInput) {
    const { id, ...data } = updateQuestionData;
    return this.prisma.question.update({ where: { id }, data: data });
  }

  deleteQuestion(id: number) {
    return this.prisma.question.delete({ where: { id } });
  }
}
