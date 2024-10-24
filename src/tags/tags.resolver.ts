import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Tag } from './model/tag.model';
import { TagsService } from './tags.service';
import { CreateTagInput } from './dto/create-tag.input';

@Resolver()
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  async createTag(@Args('createTagInput') createTagData: CreateTagInput) {
    return this.tagsService.createTag(createTagData);
  }
}
