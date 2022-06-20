import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { MessageUserRoom } from './message-User-Room.entity'

@Entity({name: 'room'})
export class Room {
  @PrimaryGeneratedColumn()
  roomId: number

  @Column()
  roomName: string

  @OneToMany(
    () => MessageUserRoom,
    messageUserRoom => messageUserRoom.messageRoom
  )
  messageUserRoom: Array<MessageUserRoom>
}