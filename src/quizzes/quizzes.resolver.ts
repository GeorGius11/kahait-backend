import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuizzesService } from './quizzes.service';
import { CreateQuizInput } from './dto/create-quiz.input';
import { Quiz } from './models/quiz.model';
import { UpdateQuizInput } from './dto/update-quiz.input';
import { AssignTagsToQuizInput } from './dto/assign-tags-to-quiz.input';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Quiz)
export class QuizzesResolver {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Mutation(() => Quiz)
  async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
    return this.quizzesService.createQuiz(createQuizInput);
  }

  @Query(() => Quiz, { name: 'quiz' })
  async getOne(
    @Args('id', { type: () => Int }) id: number,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return this.quizzesService.findOneById(id, info);
  }

  @Query(() => [Quiz], { name: 'quizzes' })
  async getAll(@Info() info?: GraphQLResolveInfo) {
    return this.quizzesService.findAll(info);
  }

  @Mutation(() => Quiz)
  async updateQuiz(@Args('updateQuizInput') updateQuizData: UpdateQuizInput) {
    return this.quizzesService.updateQuiz(updateQuizData);
  }

  @Mutation(() => Quiz)
  async deleteQuiz(@Args('id', { type: () => Int }) id: number) {
    return this.quizzesService.deleteQuiz(id);
  }

  @Mutation(() => Quiz)
  async assignTagsToQuiz(
    @Args('assignTagsToQuizData') assignTagsToQuizData: AssignTagsToQuizInput,
  ) {
    return this.quizzesService.assignTags(assignTagsToQuizData);
  }
}
