import { UserCreateInput } from "./dto/user-create.input";
import { User } from "./user.entity";

export class UserMapper {
    public static toEntity(input: UserCreateInput): User {
        const entity = new User()
        entity.email = input.email
        entity.password = input.password

        return entity
    }
}