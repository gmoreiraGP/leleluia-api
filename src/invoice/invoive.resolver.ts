import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import InvoiceDTO from './dto/invoice'
import InvoiceCreateDTO from './dto/invoice-create'
import InvoiceUpdateDTO from './dto/invoice-update'
import { InvoiceMapper } from './invoice.mapper'
import { InvoiceService } from "./invoice.service";

@Resolver(of => InvoiceDTO)
export class InvoiceResolver{
    constructor(private readonly invoiceService: InvoiceService) {}

    @Query(returns => [InvoiceDTO], {name: 'getAllInvoices'})
    async getAllInvoices(): Promise<InvoiceDTO[]>{
        return this.invoiceService.findAll()
    }

    @Query(returns => InvoiceDTO, {name: 'getInvoiceById'})
    async getInvoiceById(@Args('id') id: string): Promise<InvoiceDTO>{
        return this.invoiceService.findById(id)
    }
    
    @Mutation(returns => InvoiceDTO, {name: 'createInvoice'})
    async createInvoice(@Args('input') input: InvoiceCreateDTO): Promise<InvoiceDTO> {
        return this.invoiceService.create(InvoiceMapper.toEntity(input))
    }

    @Mutation(returns => InvoiceDTO, {name: 'updateInvoice'})
    async updateInvoice(
        @Args('input') input: InvoiceUpdateDTO
    ): Promise<InvoiceDTO> {
        return this.invoiceService.update(InvoiceMapper.fromUpdateToEntity(input))
    }
    
    @Mutation(returns => Boolean, {name: 'deleteInvoice'})
    async deleteInvoice(
        @Args('id') input: string
    ): Promise<boolean> {
        return this.invoiceService.delete(input)
    }
}