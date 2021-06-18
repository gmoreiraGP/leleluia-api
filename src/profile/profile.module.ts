import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Profile } from './profile.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  exports: [TypeOrmModule.forFeature([Profile])]
})
export class ProfileModule {}
