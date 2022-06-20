import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './user.entity'
import { Room } from './room.entity'
import { Message } from './message.entity'

@Entity({name: 'messagesUserRoom'})
export class MessageUserRoom {
  @PrimaryGeneratedColumn()
  messagesId: number

  @Column()
  messageText: string

  @Column()
  messageUser: string

  @Column()
  messageRoom: string

  @ManyToOne(
    () => User,
    user => user.messageUserRoom
  )
  @JoinColumn({ name: 'userId' })
  users: Array<User>

  @ManyToOne(
    () => Room,
    room => room.messageUserRoom
  )
  @JoinColumn({ name: 'roomId' })
  rooms: Array<Room>

  @ManyToOne(
    () => Message,
    message => message.messageUserRoom
  )
  @JoinColumn({ name: 'messageId' })
  messages: Array<User>
}