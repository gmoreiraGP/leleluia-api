import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { User } from './user/user.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ProfileModule } from './profile/profile.module'
import { InvoiceModule } from './invoice/invoice.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true
      })
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    UserModule,
    ProfileModule,
    InvoiceModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
