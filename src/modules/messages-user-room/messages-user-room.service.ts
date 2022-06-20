import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MessageUserRoom } from '../../lib/entity'

@Injectable()
export class MessagesUserRoomService {
  constructor(
    @InjectRepository(MessageUserRoom)
    private messageUserRoomRepository: Repository<MessageUserRoom>
  ) {
  }
}
