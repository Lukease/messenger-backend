import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MessageUserRoom } from './message-User-Room.entity'

@Entity({name: 'message'})
export class Message {
  @PrimaryGeneratedColumn()
  messageId: number

  @Column()
  messageText: string

  @OneToMany(
    () => MessageUserRoom,
    messageUserRoom => messageUserRoom.messageText
  )
  messageUserRoom: Array<MessageUserRoom>
}