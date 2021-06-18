import { Invoice } from "./invoice.entity";
import InvoiceCreateDTO from './dto/invoice-create'
import InvoiceUpdateDTO from './dto/invoice-update'

export class InvoiceMapper {
    public static toEntity(input: InvoiceCreateDTO): Invoice {
        const entity = new Invoice()
        entity.cnpj = input.cnpj
        entity.company = input.company
        entity.stateRegister = input.stateRegister
        entity.invoiceNumber = input.invoiceNumber
        entity.invoiceEmission = input.invoiceEmission

        return entity
    }

    public static fromUpdateToEntity(input: InvoiceUpdateDTO): Invoice {
        const entity = new Invoice()
        entity.id = input.id
        entity.cnpj = input.cnpj
        entity.company = input.company
        entity.stateRegister = input.stateRegister
        entity.invoiceNumber = input.invoiceNumber
        entity.invoiceEmission = input.invoiceEmission
        entity.status = input.status

        return entity
    }

}