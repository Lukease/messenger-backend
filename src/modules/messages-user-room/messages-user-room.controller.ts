import { Controller } from '@nestjs/common'
import { MessagesUserRoomService } from './messages-user-room.service'

@Controller('messageUserRoom')
export class MessagesUserRoomController {
  constructor(private readonly messagesUserRoomService: MessagesUserRoomService) {}
}
