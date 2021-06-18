import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class InvoiceCreateDTO {

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

}