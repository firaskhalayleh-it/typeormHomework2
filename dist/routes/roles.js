"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Permission_js_1 = require("../src/entity/Permission.js"); // Define your Role and Permission models
const Role_js_1 = require("../src/entity/Role.js"); // Define your Role and Permission models
const typeorm_1 = require("typeorm");
router.get('/roles', async (req, res) => {
    try {
        const roleRepository = (0, typeorm_1.getRepository)(Role_js_1.Role); // Get the repository for the Role entity
        const roles = await roleRepository.find(); // Use the find method to retrieve roles
        const permissions = await Permission_js_1.Permission.find(); // Assuming Permission has a find method
        res.render('roles', { roles, permissions }); // Render a page for role management with roles and permissions data
    }
    catch (error) {
        console.error(error);
        res.render('error', { error: 'An error occurred.' }); // Render an error page
    }
});
exports.default = router;
