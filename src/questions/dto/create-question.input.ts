import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field()
  title: string;

  @Field(() => Int)
  quizId: number;
}
