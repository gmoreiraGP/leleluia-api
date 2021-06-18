import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Invoice } from "./invoice.entity";

@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(Invoice)
        private invoiceRepository: Repository<Invoice>
    ) {}

    async findAll(): Promise<Invoice[]> {
        return this.invoiceRepository.find()
    }
    
    async findById(id:string): Promise<Invoice>{
        return this.invoiceRepository.findOne({ where: [ 
            {invoiceNumber: id}
        ],
    })
    }

    async create(input: Invoice): Promise<Invoice> {
        return this.invoiceRepository.save(input)
    }

    async update(input: Invoice): Promise<Invoice> {
        await this.invoiceRepository.update(input.id, {
            cnpj: input.cnpj,
            company: input.company,
            stateRegister: input.stateRegister,
            invoiceNumber: input.invoiceNumber,
            invoiceEmission: input.invoiceEmission,
            status: input.status
        })
        return input
     }
 
     async delete(id: string): Promise<boolean> {
         try {
             await this.invoiceRepository.delete(id) 
             return true
         } catch (error) {
            return false
         }
     }
}