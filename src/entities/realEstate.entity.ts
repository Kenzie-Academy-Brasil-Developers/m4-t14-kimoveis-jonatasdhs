import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm'
import { Address, Category } from './index'

@Entity('real_estate')

export class RealEstate {

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: false})
    sold: boolean

    @Column({type: 'decimal', precision: 12, scale: 2, default: 0})
    value: number | string

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string
    
    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, {nullable: true})
    category?: Category | undefined | null

}