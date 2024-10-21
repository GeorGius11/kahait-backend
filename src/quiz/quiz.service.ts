import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Quiz } from './models/quiz.model';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService) {}

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
}
