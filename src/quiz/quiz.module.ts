import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { QuizResolver } from './quiz.resolver';

@Module({
  imports: [PrismaModule],
  providers: [QuizService, QuizResolver],
})
export class QuizModule {}
