import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('User')
export class UserDTO {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  password: string
}
