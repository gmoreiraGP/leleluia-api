import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import ProfileDTO from "./dto/profile";
import ProfileCreateDTO from './dto/profile-create'
import ProfileUpdateDTO from "./dto/profile-update";
import { ProfileMapper } from "./profile.mapper";
import { ProfileService } from "./profile.service";


@Resolver(of => ProfileDTO)
export class ProfileResolver{
    constructor(private readonly profileService: ProfileService) {}

    @Query(returns => [ProfileDTO], {name: 'getAllProfiles'})
    async getAllProfiles(): Promise<ProfileDTO[]>{
        return this.profileService.findAll()
    }

    @Query(returns => ProfileDTO, {name: 'getProfileById'})
    async getProfileById(@Args('id') id: string): Promise<ProfileDTO>{
        return this.profileService.findById(id)
    }
    
    @Mutation(returns => ProfileDTO, {name: 'createProfile'})
    async createProfile(@Args('input') input: ProfileCreateDTO): Promise<ProfileDTO> {
        return this.profileService.create(ProfileMapper.toEntity(input))
    }

    @Mutation(returns => ProfileDTO, {name: 'updateProfile'})
    async updateProfile(
        @Args('input') input: ProfileUpdateDTO
    ): Promise<ProfileDTO> {
        return this.profileService.update(ProfileMapper.fromUpdateToEntity(input))
    }
    
    @Mutation(returns => Boolean, {name: 'deleteProfile'})
    async deleteProfile(
        @Args('id') input: string
    ): Promise<boolean> {
        return this.profileService.delete(input)
    }
}