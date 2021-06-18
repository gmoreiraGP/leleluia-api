import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Profile } from "./profile.entity";

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) {}

    async findAll(): Promise<Profile[]> {
        return this.profileRepository.find()
    }
    
    async findById(id:string): Promise<Profile>{
        return this.profileRepository.findOne({ where: [ 
            {userId: id}
        ],
    })
    }

    async create(input: Profile): Promise<Profile> {
        return this.profileRepository.save(input)
    }

    async update(input: Profile): Promise<Profile> {
        await this.profileRepository.update(input.id, {
            firstName: input.firstName,
            lastName: input.lastName,
            bio: input.bio,
            social: input.social,
            userId: input.userId
        })
        return input
     }
 
     async delete(id: string): Promise<boolean> {
         try {
             await this.profileRepository.delete(id) 
             return true
         } catch (error) {
            return false
         }
     }
}