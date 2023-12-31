"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_js_1 = require("./data-source.js");
const User_js_1 = require("./entity/User.js");
data_source_js_1.AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User_js_1.User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await data_source_js_1.AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("Loading users from the database...");
    const users = await data_source_js_1.AppDataSource.manager.find(User_js_1.User);
    console.log("Loaded users: ", users);
    console.log("Here you can setup and run express / fastify / any other framework.");
}).catch(error => console.log(error));
