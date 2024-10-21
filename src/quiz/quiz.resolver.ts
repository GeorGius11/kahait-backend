import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Quiz } from './models/quiz.model';
import { QuizService } from './quiz.service';

@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @Query(() => Quiz)
  async quiz(@Args('id', { type: () => Int }) id: number) {
    return this.quizService.findOneById(id);
  }
}
