import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 250, nullable: false, unique: true})
    email: string

    @Column({nullable: false})
    password: string
}