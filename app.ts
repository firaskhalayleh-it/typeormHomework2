import 'reflect-metadata';
import express from 'express';
import userRouter from './routes/user.js'; // Replace with the correct path to your user router
import rolesRouter from './routes/roles.js';
import { initialize } from './src/data-source.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the application!');
});

// Mount the userRouter at the '/api/users' path
app.use('/api/users', userRouter);

// Mount the rolesRouter at the '/api/roles' path
app.use('/api/roles', rolesRouter);

app.listen(PORT, () => {
  initialize()
  console.log(`Server is running on port ${PORT}`);
});
