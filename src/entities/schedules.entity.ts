import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { RealEstate, User } from './'

@Entity('schedules_users_properties')

export class Schedule {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'date'})
    date: string

    @Column({type: 'time'})
    hour: string

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User

}