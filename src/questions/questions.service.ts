import { Injectable } from '@nestjs/common';
import { CreateQuestionInput } from './dto/create-question.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  createQuestion(createQuestionInput: CreateQuestionInput) {
    return this.prisma.question.create({ data: createQuestionInput });
  }

  deleteQuestion(id: number) {
    return this.prisma.question.delete({ where: { id } });
  }
}
