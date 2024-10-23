import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerInput } from './dto/create-answer.input';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) {}

  createAnswer(createAnswerInput: CreateAnswerInput) {
    return this.prisma.answer.create({ data: createAnswerInput });
  }

  deleteAnswer(id: number) {
    return this.prisma.answer.delete({ where: { id } });
  }
}
