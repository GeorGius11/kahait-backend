import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Answer } from 'src/answers/models/answer.model';

@ObjectType()
export class Question {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => [Answer])
  answers: Answer[];
}
