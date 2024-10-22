import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionResolver } from './questions.resolver';

@Module({
  providers: [QuestionsService, QuestionResolver],
})
export class QuestionsModule {}
