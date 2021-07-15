import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity()
export class Tasks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
