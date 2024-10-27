import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Question } from '../../questions/models/question.model';
import { Tag } from 'src/tags/model/tag.model';

@ObjectType()
export class Quiz {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true, defaultValue: '' })
  description?: string;

  @Field()
  createdAt: Date;

  @Field((type) => [Question])
  questions: Question[];

  @Field((type) => [Tag], { defaultValue: [] })
  tags: Tag[];
}
