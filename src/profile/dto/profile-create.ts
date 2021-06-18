import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class ProfileCreateDTO {
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