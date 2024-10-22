import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateQuizInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
