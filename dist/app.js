"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const user_js_1 = __importDefault(require("./routes/user.js")); // Replace with the correct path to your user router
const roles_js_1 = __importDefault(require("./routes/roles.js"));
const data_source_js_1 = require("./src/data-source.js");
const auth_js_1 = require("./middleware/auth.js");
const autharize_js_1 = require("./middleware/autharize.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(auth_js_1.authenticate);
app.get('/', (req, res) => {
    res.send('Welcome to the application!');
});
app.use('/api/users', user_js_1.default);
// Mount the rolesRouter at the '/api/roles' path
app.use('/api/roles', roles_js_1.default);
roles_js_1.default.use('/admin-actions', (0, autharize_js_1.authorize)(['admin']), (req, res, next) => {
    res.send('welcome admin');
    res.status(400).send('you are not authorized!!');
});
app.listen(PORT, () => {
    (0, data_source_js_1.initialize)();
    console.log(`Server is running on port ${PORT}`);
});
