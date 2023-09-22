import 'reflect-metadata';
import express from 'express';
import userRouter from './routes/user.js'; // Replace with the correct path to your user router
import rolesRouter from './routes/roles.js';
import { initialize } from './src/data-source.js';
import { authenticate } from './middleware/auth.js';
import { authorize } from './middleware/autharize.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(authenticate);


app.get('/', (req, res) => {
  res.send('Welcome to the application!');
});

app.use('/api/users', userRouter);

// Mount the rolesRouter at the '/api/roles' path
app.use('/api/roles', rolesRouter);
rolesRouter.use('/admin-actions', authorize(['admin']), (req, res, next) => {
  res.send('welcome admin')
  res.status(400).send('you are not authorized!!')
});

app.listen(PORT, () => {
  initialize()
  console.log(`Server is running on port ${PORT}`);
});
