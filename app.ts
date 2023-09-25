import 'reflect-metadata';
import express from 'express';
import userRouter from './routes/user.js'; // Replace with the correct path to your user router
import rolesRouter from './routes/roles.js';
import profileRouter from './routes/profile.js'
import { initialize } from './src/data-source.js';
import { authenticate } from './middleware/auth.js';
import { authorize } from './middleware/autharize.js';
import { User } from './src/entity/User.js';
import { getRepository } from 'typeorm';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(authenticate);

app.get('/users', async (req, res) => {
  try {
    // Get the user repository
    

    // Use query builder to select specific columns (id, username, password)
    const users = await User
      .createQueryBuilder('user')
      .select(['user.id', 'user.username', 'user.password'])
      .getMany();

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the application!');
});
app.use('', profileRouter);
app.use('', userRouter);

app.use('', rolesRouter);
// rolesRouter.use('/admin-actions',authorize, (req, res, next) => {
//   res.send('welcome admin')
//   res.status(400).send('you are not authorized!!')
// });

app.listen(PORT, () => {
  initialize()
  console.log(`Server is running on port ${PORT}`);
});

export {app}