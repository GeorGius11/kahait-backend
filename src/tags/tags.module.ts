import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TagsService, TagsResolver],
})
export class TagsModule {}
