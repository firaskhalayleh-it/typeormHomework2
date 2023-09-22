import express from 'express';
import { User } from '../src/entity/User.js';
import { Profile } from '../src/entity/Profile.js';
import { Role } from '../src/entity/Role.js';

const router = express();

router.use(express.json());

router.post('/api/users', async (req, res) => {
  try {
    const roleName = req.body.type;

    // Find the role by name
    const role = await Role.findOne({ where: { name: roleName } });

    if (!role) {
      return res.status(400).json({ error: 'Role not found.' });
    }

    // Create a new user
    const newUser = User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: role,
    });

    // Create a new profile
    const newProfile = Profile.create({
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user.' });
  }
});

export default router;
