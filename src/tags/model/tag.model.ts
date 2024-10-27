import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Quiz } from 'src/quizzes/models/quiz.model';

@ObjectType()
export class Tag {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => [Quiz], { nullable: true })
  quizzes?: Quiz[];
}
