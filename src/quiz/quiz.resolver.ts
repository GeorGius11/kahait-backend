import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Quiz } from './models/quiz.model';
import { QuizService } from './quiz.service';
import { CreateQuizInput } from './dto/create-quiz.input';

@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @Query(() => Quiz)
  async quiz(@Args('id', { type: () => Int }) id: number) {
    return this.quizService.findOneById(id);
  }

  @Mutation(() => Quiz)
  async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
    return this.quizService.createQuiz(createQuizInput);
  }
}
