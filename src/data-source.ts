import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.js"
import { Permission } from "./entity/Permission.js"
import { Profile } from "./entity/Profile.js"
import { Role } from "./entity/Role.js"

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'database-1.ckxcq2pvrc9s.eu-west-2.rds.amazonaws.com',
  port: 3306,
  username:'admin',
  password: '12345678',
  database: 'homework',
  synchronize: true,
  logging: false,
  migrations: [],
  entities: [User, Permission, Profile, Role],
  subscribers: [],
})
    


export const initialize = async() => {
    AppDataSource.initialize().then(() => {
      console.log("Connected to DB!");
    }).catch(err => {
      console.error('Failed to connect to DB: ' + err);
    })
  }