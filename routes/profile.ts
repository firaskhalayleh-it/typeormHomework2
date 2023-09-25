import express from 'express';
import { User } from '../src/entity/User.js';
import { Profile } from '../src/entity/Profile.js';



const router = express.Router();

router.put('/modify-profile', async (req, res) => {
    try {
   
  
      // Find the user by ID (assuming you have a method to find users by ID)
      
      
  
      // Update the profile attributes
     const profile = Profile.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        user : req.body.id
        
     })
      // Save both the user and profile to update the data
      profile.save()
  
      // Return the updated user as a response
      res.status(200).json(profile);


    } catch (error) {
      console.error('Error modifying profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  export default router;
  