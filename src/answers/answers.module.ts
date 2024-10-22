import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AnswersResolver } from './answers.resolver';

@Module({
  imports: [PrismaModule],
  providers: [AnswersService, AnswersResolver],
})
export class AnswersModule {}
