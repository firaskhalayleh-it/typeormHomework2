"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_js_1 = require("../src/entity/User.js");
const Role_js_1 = require("../src/entity/Role.js");
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post('/roles', async (req, res) => {
    try {
        // Assuming you have a way to identify the user for whom you want to assign a role
        const userId = req.body.userId; // Replace with the actual way to identify the user
        const roleName = req.body.roleName;
        // Find the user by their ID
        const user = await User_js_1.User.findOne(userId);
        const role = await Role_js_1.Role.findOne({ where: { name: roleName } });
        // Check if the role was found
        if (!role) {
            return res.status(404).json({ error: 'Role not found.' });
        }
        // Save the user to update the role association
        await user?.save();
        res.status(200).json({ message: 'Role assigned to user successfully.' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});
exports.default = router;
