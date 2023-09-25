import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role.js";


@Entity()
export class Permission extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id:string

   @Column()
   name : string

   @ManyToMany(() => Role, role=>role.permissions)
   @JoinTable()
   role: Role;


}