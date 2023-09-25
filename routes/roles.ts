import express from 'express';
import { User } from '../src/entity/User.js';
import { Role } from '../src/entity/Role.js';

const router = express();

router.use(express.json());

router.post('/roles', async (req, res) => {
  try {
    // Assuming you have a way to identify the user for whom you want to assign a role
    const userId = req.body.userId; // Replace with the actual way to identify the user
    const roleName = req.body.roleName;

    // Find the user by their ID
    const user = await User.findOne(userId);
    const role = await Role.findOne({ where: { name: roleName } });

    // Check if the role was found
    if (!role) {
      return res.status(404).json({ error: 'Role not found.' });
    }

    

    // Save the user to update the role association
    await user?.save();

    res.status(200).json({ message: 'Role assigned to user successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

export default router;
