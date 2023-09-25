"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_js_1 = require("./entity/User.js");
const Permission_js_1 = require("./entity/Permission.js");
const Profile_js_1 = require("./entity/Profile.js");
const Role_js_1 = require("./entity/Role.js");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'database-1.ckxcq2pvrc9s.eu-west-2.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: '12345678',
    database: 'homework',
    synchronize: true,
    logging: false,
    migrations: [],
    entities: [User_js_1.User, Permission_js_1.Permission, Profile_js_1.Profile, Role_js_1.Role],
    subscribers: [],
});
const initialize = async () => {
    exports.AppDataSource.initialize().then(() => {
        console.log("Connected to DB!");
    }).catch(err => {
        console.error('Failed to connect to DB: ' + err);
    });
};
exports.initialize = initialize;
