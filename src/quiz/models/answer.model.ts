import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Answer {
  @Field((type) => Int)
  id: number;

  @Field()
  text: string;

  @Field()
  isCorrect: boolean;
}
