import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Quiz } from './models/quiz.model';
import { QuizService } from './quiz.service';
import { CreateQuizInput } from './dto/create-quiz.input';

@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

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
