import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Answer } from './models/answer.model';
import { AnswersService } from './answers.service';
import { CreateAnswerInput } from './dto/create-answer.input';

@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  @Mutation(() => Answer)
  async createAnswer(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
  ) {
    return this.answersService.createAnswer(createAnswerInput);
  }

  @Mutation(() => Answer)
  async deleteAnswer(@Args('id', { type: () => Int }) id: number) {
    return this.answersService.deleteAnswer(id);
  }
}
