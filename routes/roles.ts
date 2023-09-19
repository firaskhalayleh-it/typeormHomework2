
import express from 'express';
const router = express.Router();
import { Permission } from '../src/entity/Permission.js'; // Define your Role and Permission models
import { Role } from '../src/entity/Role.js'; // Define your Role and Permission models
import { getRepository } from 'typeorm';

router.get('/roles', async (req, res) => {
    try {
      const roleRepository = getRepository(Role); // Get the repository for the Role entity
      const roles = await roleRepository.find(); // Use the find method to retrieve roles
      const permissions = await Permission.find(); // Assuming Permission has a find method
  
      res.render('roles', { roles, permissions }); // Render a page for role management with roles and permissions data
    } catch (error) {
      console.error(error);
      res.render('error', { error: 'An error occurred.' }); // Render an error page
    }
  });
  
export default router