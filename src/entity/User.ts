import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToOne, JoinTable, JoinColumn } from "typeorm"
import { Profile } from "./Profile.js"
import { Role } from "./Role.js"

@Entity()
export class User extends BaseEntity {
  

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

   @ManyToMany(()=>Role ,role=>role.user)
   @JoinTable()
   role:Role

   @OneToOne(()=>Profile,profile=>profile.user, {eager:true})
   @JoinColumn()
   profile:Profile

}
