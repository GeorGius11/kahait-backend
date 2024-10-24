import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateTagInput } from './create-tag.input';

@InputType()
export class UpdateTagInput extends PartialType(CreateTagInput) {
  @Field((type) => Int)
  id: number;
}
