import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class ProfileUpdateDTO {
    @Field()
    id: string

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    bio: string

    @Field() 
    social: string

    @Field()
    userId: string
}