import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find()
    }

    async create(input: User): Promise<User> {
        return this.userRepository.save(input)
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.userRepository.delete(id) 
            return true
        } catch (error) {
           return false
        }
    }
}