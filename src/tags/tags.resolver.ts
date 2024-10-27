import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Tag } from './model/tag.model';
import { TagsService } from './tags.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { GraphQLResolveInfo } from 'graphql';

@Resolver()
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  async createTag(@Args('createTagInput') createTagData: CreateTagInput) {
    return this.tagsService.createTag(createTagData);
  }

  @Query(() => [Tag], { name: 'tags' })
  async getAllTags(@Info() info?: GraphQLResolveInfo) {
    return this.tagsService.getAllTags(info);
  }

  @Mutation(() => Tag)
  async updateTag(@Args('updateTagInput') updateTagData: UpdateTagInput) {
    return this.tagsService.updateTag(updateTagData);
  }

  @Mutation(() => Tag)
  async deleteTag(@Args('id', { type: () => Int }) id: number) {
    return this.tagsService.deleteTag(id);
  }
}
