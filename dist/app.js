"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const user_js_1 = __importDefault(require("./routes/user.js")); // Replace with the correct path to your user router
const roles_js_1 = __importDefault(require("./routes/roles.js"));
const profile_js_1 = __importDefault(require("./routes/profile.js"));
const data_source_js_1 = require("./src/data-source.js");
const User_js_1 = require("./src/entity/User.js");
const app = (0, express_1.default)();
exports.app = app;
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// app.use(authenticate);
app.get('/users', async (req, res) => {
    try {
        // Get the user repository
        // Use query builder to select specific columns (id, username, password)
        const users = await User_js_1.User
            .createQueryBuilder('user')
            .select(['user.id', 'user.username', 'user.password'])
            .getMany();
        res.status(200).json(users);
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/', (req, res) => {
    res.send('Welcome to the application!');
});
app.use('', profile_js_1.default);
app.use('', user_js_1.default);
app.use('', roles_js_1.default);
// rolesRouter.use('/admin-actions',authorize, (req, res, next) => {
//   res.send('welcome admin')
//   res.status(400).send('you are not authorized!!')
// });
app.listen(PORT, () => {
    (0, data_source_js_1.initialize)();
    console.log(`Server is running on port ${PORT}`);
});
