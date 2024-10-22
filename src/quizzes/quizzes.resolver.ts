import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuizzesService } from './quizzes.service';
import { CreateQuizInput } from './dto/create-quiz.input';
import { Quiz } from './models/quiz.model';

@Resolver(() => Quiz)
export class QuizzesResolver {
  constructor(private readonly quizService: QuizzesService) {}

  @Mutation(() => Quiz)
  async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
    return this.quizService.createQuiz(createQuizInput);
  }

  @Query(() => Quiz, { name: 'quiz' })
  async getOne(@Args('id', { type: () => Int }) id: number) {
    return this.quizService.findOneById(id);
  }

  @Query(() => [Quiz], { name: 'quizzes' })
  async getAll() {
    return this.quizService.findAll();
  }
}
