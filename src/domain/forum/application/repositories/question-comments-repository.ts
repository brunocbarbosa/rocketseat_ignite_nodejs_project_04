import { QuestionComment } from '../../enterprise/entities/question-comments'

export interface QuestionsCommentsRepository {
  create(quiestion: QuestionComment): Promise<void>
}
