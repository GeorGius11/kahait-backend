import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateQuestionInput } from './create-question.input';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @Field((type) => Int)
  id: number;
}
