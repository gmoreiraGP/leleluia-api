import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Profile')
export default class ProfileDTO {
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
}