import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UserUpdateInput{
    @Field()
    id: string

    @Field()
    email: string
    
    @Field()
    password: string
}