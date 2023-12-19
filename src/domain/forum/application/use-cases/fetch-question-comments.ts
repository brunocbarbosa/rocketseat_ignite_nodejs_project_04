import { Either, right } from '@/core/either'
import { QuestionComment } from '../../enterprise/entities/question-comments'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsUseCaseResponse = Either<
  null,
  {
    questionComments: QuestionComment[]
  }
>

export class FetchQuestionCommentsUseCase {
  constructor(private quesionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const questionComments =
      await this.quesionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })

    return right({
      questionComments,
    })
  }
}
