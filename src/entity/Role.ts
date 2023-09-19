import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.js";
import { Permission } from "./Permission.js";


@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: string


    @Column({unique:true})
    name:string


    @ManyToMany(()=>User)
    users:User[];

    @ManyToMany(()=>Permission, {cascade:true , eager:true})
    permissions : Permission[];
}