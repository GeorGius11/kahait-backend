import { Resolver } from '@nestjs/graphql';
import { Answer } from './models/answer.model';
import { AnswersService } from './answers.service';

@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}
}
