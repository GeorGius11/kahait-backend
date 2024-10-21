import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Question } from './question.model';

@ObjectType()
export class Quiz {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field((type) => [Question])
  questions: Question[];
}
