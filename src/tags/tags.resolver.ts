import { Resolver } from '@nestjs/graphql';
import { Tag } from './model/tag.model';

@Resolver(() => Tag)
export class TagsResolver {}
