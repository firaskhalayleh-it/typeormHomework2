import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.js";
import { Permission } from "./Permission.js";


@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: string


    @Column({unique:true})
    name:string


    @ManyToMany(()=>User,user=>user.role)
    @JoinTable()
    user:User;

    @ManyToMany(()=>Permission, permission =>permission.role ,{cascade:true , eager:true})
    permissions : Permission[];
}