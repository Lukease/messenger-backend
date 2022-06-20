import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Room } from '../../lib/entity'
import { RoomController } from './room.conroller'
import { RoomService } from './room.service'

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService],
  controllers: [RoomController],
})
export class RoomModule {}