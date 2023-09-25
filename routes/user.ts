import express from 'express';
import { User } from '../src/entity/User.js';
import { Profile } from '../src/entity/Profile.js';

const router = express();

router.use(express.json());

// Create a new user and profile
router.post('/api/users', async (req, res) => {
  try {
    // Create a new user
    const newUser = User.create({
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
  } catch (error) {
    console.error('Error creating user and profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
