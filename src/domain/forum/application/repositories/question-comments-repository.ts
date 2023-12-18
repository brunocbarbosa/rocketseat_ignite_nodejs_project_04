import { PaginationParams } from '@/core/repositories/pagination.params'
import { QuestionComment } from '../../enterprise/entities/question-comments'

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]>
  create(questionComment: QuestionComment): Promise<void>
  delete(answerComment: QuestionComment): Promise<void>
}
