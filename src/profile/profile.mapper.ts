import { User } from "src/user/user.entity";
import { Profile } from "./profile.entity";
import ProfileCreateDTO from "./dto/profile-create";
import ProfileUpdateDTO from "./dto/profile-update";

export class ProfileMapper {
    public static toEntity(input: ProfileCreateDTO): Profile {
        const entity = new Profile()
        entity.firstName = input.firstName
        entity.lastName = input.lastName
        entity.bio = input.bio
        entity.social = input.social

        const user = new User()
        user.id = input.userId
        entity.userId = user

        return entity
    }

    public static fromUpdateToEntity(input: ProfileUpdateDTO): Profile {
        const entity = new Profile()
        entity.id = input.id
        entity.firstName = input.firstName
        entity.lastName = input.lastName
        entity.bio = input.bio
        entity.social = input.social

        const user = new User()
        user.id = input.userId
        entity.userId = user

        return entity
    }

}