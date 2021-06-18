import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Status } from './dto/StatusENUM'


@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  company: string
  
  @Column()
  cnpj: string
  
  @Column()
  stateRegister:  string
  
  @Column()
  invoiceNumber: string
  
  @Column()
  invoiceEmission: Date
  
  @Column({
    default: Status.SEPARATION,
    enum: Status,
    type: 'enum'
    })
   status: Status
//   @OneToOne(() => User)
//   @JoinColumn({ name: 'userId' })
//   userId: User
}
