import { Slug } from "./values-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface QuestionProps {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date 
}

export class Question extends Entity<QuestionProps>{
  get title(){
    return this.props.title
  }
  get content(){
    return this.props.content
  }
  get slug(){
    return this.props.slug
  }
  get authorId(){
    return this.props.authorId
  }
}