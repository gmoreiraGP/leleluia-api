import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Invoice } from './invoice.entity'
import { InvoiceService } from './invoice.service'
import { InvoiceResolver } from './invoive.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  providers: [InvoiceService, InvoiceResolver]
})
export class InvoiceModule {}
