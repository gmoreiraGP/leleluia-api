import { User } from 'src/user/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  firstName: string

  @Column({ nullable: false })
  lastName: string

  @Column({ nullable: false })
  bio: string

  @Column()
  social: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  userId: User
}
