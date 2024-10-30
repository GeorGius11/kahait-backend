import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Answer } from './models/answer.model';
import { AnswersService } from './answers.service';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  @Mutation(() => Answer)
  async createAnswer(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
  ) {
    return this.answersService.create(createAnswerInput);
  }

  @Query(() => [Answer], { name: 'answers' })
  async getAnswers(@Info() info?: GraphQLResolveInfo) {
    return this.answersService.findAll(info);
  }

  @Mutation(() => Answer)
  async updateAnswer(
    @Args('updateAnswerInput') updateAnswerData: UpdateAnswerInput,
  ) {
    return this.answersService.update(updateAnswerData);
  }

  @Mutation(() => Answer)
  async deleteAnswer(@Args('id', { type: () => Int }) id: number) {
    return this.answersService.delete(id);
  }
}
