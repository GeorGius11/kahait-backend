import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizInput } from './dto/create-quiz.input';
import { UpdateQuizInput } from './dto/update-quiz.input';

@Injectable()
export class QuizzesService {
  constructor(private readonly prisma: PrismaService) {}

  createQuiz(createQuizInput: CreateQuizInput) {
    return this.prisma.quiz.create({ data: createQuizInput });
  }

  findOneById(id: number) {
    return this.prisma.quiz.findUnique({
      where: {
        id,
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.quiz.findMany();
  }

  updateQuiz(updateQuizData: UpdateQuizInput) {
    const { id, ...data } = updateQuizData;
    return this.prisma.quiz.update({ where: { id }, data: data });
  }

  deleteQuiz(id: number) {
    return this.prisma.quiz.delete({ where: { id } });
  }
}
