import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswerRepository implements AnswersRepository {
  public item: Answer[] = []

  async create(answer: Answer) {
    this.item.push(answer)
  }
}
