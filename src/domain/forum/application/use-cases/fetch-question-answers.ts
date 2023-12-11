import { AnswerProps } from '../../enterprise/entities/answer'
import { Question } from '../../enterprise/entities/question'
import { AnswersRepository } from '../repositories/answers-repository'
import { QuestionsRepository } from '../repositories/questions-repository'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionAnswersCaseResponse {
  answers: AnswerProps[]
}

export class FetchQuestionAnswersUseCase {
  constructor(private AnswersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersCaseResponse> {
    const answers = await this.AnswersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
