import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Question } from './models/question.model';
import { CreateQuestionInput } from './dto/create-question.input';
import { QuestionsService } from './questions.service';
import { UpdateQuestionInput } from './dto/update-question.input';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionsService: QuestionsService) {}

  @Mutation(() => Question)
  async createQuestion(
    @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
  ) {
    return this.questionsService.createQuestion(createQuestionInput);
  }

  @Mutation(() => Question)
  async updateQuestion(
    @Args('updateQuestionInput') updateQuestionData: UpdateQuestionInput,
  ) {
    return this.questionsService.updateQuestion(updateQuestionData);
  }

  @Mutation(() => Question)
  async deleteQuestion(@Args('id', { type: () => Int }) id: number) {
    return this.questionsService.deleteQuestion(id);
  }
}
