import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MessageUserRoom } from './message-User-Room.entity'

@Entity({name: 'user'})
export class User {
  @PrimaryGeneratedColumn()
  userId: number

  @Column()
  userName: string

  @OneToMany(
    () => MessageUserRoom,
    messagesUserRoom => messagesUserRoom.messageUser
  )
  messageUserRoom: Array<MessageUserRoom>
}