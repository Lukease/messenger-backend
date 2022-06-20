import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MessageUserRoom } from '../../lib/entity'
import { MessagesUserRoomController } from './messages-user-room.controller'
import { MessagesUserRoomService } from "./messages-user-room.service";

@Module({
  imports: [TypeOrmModule.forFeature([MessageUserRoom])],
  providers: [MessagesUserRoomService],
  controllers: [MessagesUserRoomController],
})
export class MessagesUserRoomModule {}