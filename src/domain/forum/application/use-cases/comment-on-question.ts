import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { QuestionsRepository } from '../repositories/questions-repository'
import { QuestionsCommentsRepository } from '../repositories/question-comments-repository'
import { QuestionComment } from '../../enterprise/entities/question-comments'

interface CommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

interface CommentOnQuestionUseCaseResponse {
  questionComment: QuestionComment
}

export class CommentOnQuestionUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private questionCommentsRepository: QuestionsCommentsRepository,
  ) {}

  async execute({
    authorId,
    questionId,
    content,
  }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) throw new Error('Question not found.')

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityId(authorId),
      questionId: new UniqueEntityId(questionId),
      content,
    })

    await this.questionCommentsRepository.create(questionComment)

    return {
      questionComment,
    }
  }
}
