import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizInput } from './dto/create-quiz.input';

@Injectable()
export class QuizService {
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
    return this.prisma.quiz.findMany({
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });
  }
}
