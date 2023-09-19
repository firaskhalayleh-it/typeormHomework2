import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToOne } from "typeorm"
import { Profile } from "./Profile.js"
import { Role } from "./Role.js"

@Entity()
export class User extends BaseEntity {
  

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @ManyToMany(()=>Role)
    role:Role
   @OneToOne(()=>Profile)
   profile:Profile

}
