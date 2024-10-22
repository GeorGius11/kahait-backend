import { Module } from '@nestjs/common';
import { QuizzesService as QuizzesService } from './quizzes.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { QuizzesResolver } from './quizzes.resolver';

@Module({
  imports: [PrismaModule],
  providers: [QuizzesService, QuizzesResolver],
})
export class QuizzesModule {}
