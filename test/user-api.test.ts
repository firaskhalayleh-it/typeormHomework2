import request from 'supertest';
import app from '../routes/user.js'; // Import your Express app here
import { User } from '../src/entity/User.js';
import { createConnection, getConnection } from 'typeorm';

beforeAll(async () => {
  // Initialize TypeORM connection
  await createConnection({
    // Your TypeORM configuration for the test database
    type: 'mysql', // Or your database type
    database: ':memory:', // Use an in-memory database for testing
    entities: [User], // Register your User entity
    synchronize: true, // Auto-create database schema (for testing only)
  });
});

afterAll(async () => {
  // Close the TypeORM connection after all tests
  const connection = getConnection();
  await connection.close();
});


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
