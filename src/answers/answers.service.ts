import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) {}

  createAnswer(createAnswerInput: CreateAnswerInput) {
    return this.prisma.answer.create({ data: createAnswerInput });
  }

  updateAnswer(updateAnswerData: UpdateAnswerInput) {
    const { id, ...data } = updateAnswerData;
    return this.prisma.answer.update({ where: { id }, data: data });
  }

  deleteAnswer(id: number) {
    return this.prisma.answer.delete({ where: { id } });
  }
}
