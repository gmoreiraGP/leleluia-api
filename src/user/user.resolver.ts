import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserDTO } from "./dto/user";
import { UserCreateInput } from "./dto/user-create.input";
import { UserMapper } from "./user.mapper";
import { UserService } from "./user.service";

@Resolver(of => UserDTO)
export class UserResolver{
    constructor(private readonly userService: UserService){}

    @Query(returns => [UserDTO], {name: 'getAllUsers'})
    async getAllUsers(): Promise<UserDTO[]>{
        return this.userService.findAll()
    }

    @Mutation(returns => UserDTO, {name: 'createUser'})
    async createUser(
        @Args('input') input: UserCreateInput
    ): Promise<UserDTO> {
        return this.userService.create(UserMapper.toEntity(input))
    }
    
    @Mutation(returns => Boolean, {name: 'deleteUser'})
    async deleteUser(
        @Args('id') input: string
    ): Promise<boolean> {
        return this.userService.delete(input)
    }
    
}