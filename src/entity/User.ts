import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToOne } from "typeorm"
import { Profile } from "./Profile.js"
import { Role } from "./Role.js"

@Entity()
export class User extends BaseEntity {
  

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @ManyToMany(()=>Role, roles=>roles.users)
    role:Role
   @OneToOne(()=>Profile)
   profile:Profile

}
