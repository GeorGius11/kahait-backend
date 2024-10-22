import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Question } from './models/question.model';
import { CreateQuestionInput } from './dto/create-question.input';
import { QuestionsService } from './questions.service';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionsService: QuestionsService) {}

  @Mutation(() => Question)
  async createQuestion(
    @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
  ) {
    return this.questionsService.createQuestion(createQuestionInput);
  }
}
