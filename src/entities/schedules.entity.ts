import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { RealEstate, User } from './'

@Entity('schedules_users_properties')

export class Schedule {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'date'})
    date: string

    @Column({type: 'time'})
    time: string

    @ManyToOne(() => RealEstate)
    realState: RealEstate

    @ManyToOne(() => User)
    user: User

}