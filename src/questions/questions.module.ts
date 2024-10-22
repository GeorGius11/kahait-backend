import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionResolver } from './questions.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [QuestionsService, QuestionResolver],
})
export class QuestionsModule {}
