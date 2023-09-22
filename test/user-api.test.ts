import request from 'supertest';
import app from '../routes/user.js'; // Import your Express app here

describe('User API Routes', () => {
  it('should create a new user', async () => {
    const userData = {
      username: 'testuser',
      password: 'password123',
      email: 'test@example.com',
    };

    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201);

    expect(response.body.username).toBe(userData.username);
    expect(response.body.email).toBe(userData.email);
  });

  it('should get a user by ID', async () => {
    // Assume you have a test user ID, or create one during the test
    const userId = '123';

    const response = await request(app)
      .get(`/api/users/${userId}`)
      .expect(200);

    expect(response.body.id).toBe(userId);
    // Add more assertions based on your data
  });
});
