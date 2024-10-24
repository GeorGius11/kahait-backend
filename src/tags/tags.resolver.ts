import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Tag } from './model/tag.model';
import { TagsService } from './tags.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';

@Resolver()
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  async createTag(@Args('createTagInput') createTagData: CreateTagInput) {
    return this.tagsService.createTag(createTagData);
  }

  @Mutation(() => Tag)
  async updateTag(@Args('updateTagInput') updateTagData: UpdateTagInput) {
    return this.tagsService.updateTag(updateTagData);
  }
}
