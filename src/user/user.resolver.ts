import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserDTO } from "./dto/user";
import { UserCreateInput } from "./dto/user-create.input";
import { UserUpdateInput } from "./dto/user-update.input";
import { UserMapper } from "./user.mapper";
import { UserService } from "./user.service";

@Resolver(of => UserDTO)
export class UserResolver{
    constructor(private readonly userService: UserService){}

    @Query(returns => [UserDTO], {name: 'getAllUsers'})
    async getAllUsers(): Promise<UserDTO[]>{
        return this.userService.findAll()
    }

    @Query(returns => UserDTO, {name: 'getUserById'})
    async getUserById(@Args('id') id: string): Promise<UserDTO>{
        return this.userService.findById(id)
    }

    @Mutation(returns => UserDTO, {name: 'createUser'})
    async createUser(
        @Args('input') input: UserCreateInput
    ): Promise<UserDTO> {
        return this.userService.create(UserMapper.toEntity(input))
    }

    @Mutation(returns => UserDTO, {name: 'updateUser'})
    async updateUser(
        @Args('input') input: UserUpdateInput
    ): Promise<UserDTO> {
        return this.userService.update(input)
    }
    
    @Mutation(returns => Boolean, {name: 'deleteUser'})
    async deleteUser(
        @Args('id') input: string
    ): Promise<boolean> {
        return this.userService.delete(input)
    }
    
}