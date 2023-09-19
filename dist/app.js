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
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Welcome to the application!');
});
// Mount the userRouter at the '/api/users' path
app.use('/api/users', user_js_1.default);
// Mount the rolesRouter at the '/api/roles' path
app.use('/api/roles', roles_js_1.default);
app.listen(PORT, () => {
    (0, data_source_js_1.initialize)();
    console.log(`Server is running on port ${PORT}`);
});
