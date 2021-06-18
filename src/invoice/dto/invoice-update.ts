import { Field, InputType } from "@nestjs/graphql";
import { Status } from "./StatusENUM";

@InputType()
export default class InvoiceUpdateDTO {
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