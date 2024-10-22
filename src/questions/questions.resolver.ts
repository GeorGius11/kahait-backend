import { Resolver } from '@nestjs/graphql';
import { Question } from './models/question.model';

@Resolver(() => Question)
export class QuestionResolver {}
