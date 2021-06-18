import { Field, ObjectType } from "@nestjs/graphql";
import { Status } from "./StatusENUM";

@ObjectType('Invoice')
export default class InvoiceDTO {
    @Field()
    id: string

    @Field()
    company: string
  
    @Field()
    cnpj: string
    
    @Field()
    stateRegister:  string
    
    @Field()
    invoiceNumber: string
    
    @Field()
    invoiceEmission: Date
  
    @Field()
    status: Status
}