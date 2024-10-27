import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AssignTagsToQuizInput {
  @Field((type) => Int)
  quizId: number;

  @Field((type) => [Int])
  tagIds: number[];
}
