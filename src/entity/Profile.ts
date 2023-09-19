import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.js";

@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false, length: 20 })
    firstName: string;

    @Column({ nullable: false, length: 20 })
    lastName: string;

    @Column({ nullable: false })
    dateOfBirth: Date;

    @OneToOne(() => User)
    user:User
}
