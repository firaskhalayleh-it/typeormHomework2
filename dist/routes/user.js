"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_js_1 = require("../src/entity/User.js");
const Profile_js_1 = require("../src/entity/Profile.js");
const Role_js_1 = require("../src/entity/Role.js");
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.post('/api/users', async (req, res) => {
    try {
        const roleName = req.body.type;
        // Find the role by name
        const role = await Role_js_1.Role.findOne({ where: { name: roleName } });
        if (!role) {
            return res.status(400).json({ error: 'Role not found.' });
        }
        // Create a new user
        const newUser = User_js_1.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            role: role,
        });
        // Create a new profile
        const newProfile = Profile_js_1.Profile.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            // Add other profile attributes here
        });
        // Associate the user and the profile
        newUser.profile = newProfile;
        // Save both the user and the profile to the database
        await newUser.save();
        await newProfile.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user.' });
    }
});
exports.default = router;
