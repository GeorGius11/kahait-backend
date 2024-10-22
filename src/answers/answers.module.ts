import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AnswersService],
})
export class AnswersModule {}
