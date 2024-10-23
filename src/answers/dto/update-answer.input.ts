import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateAnswerInput } from './create-answer.input';

@InputType()
export class UpdateAnswerInput extends PartialType(CreateAnswerInput) {
  @Field()
  id: number;
}
