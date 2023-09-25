"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_js_1 = require("../src/entity/User.js");
const router = (0, express_1.default)();
router.use(express_1.default.json());
// Create a new user and profile
router.post('/api/users', async (req, res) => {
    try {
        // Create a new user
        const newUser = User_js_1.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
        // Create a new profile
        // Associate the profile with the user
        // Save both the user and profile to their respective tables
        await newUser.save();
        // Return the user and profile as a response
        res.status(201).json({ user: newUser });
    }
    catch (error) {
        console.error('Error creating user and profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = router;
