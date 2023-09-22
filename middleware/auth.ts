import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../src/entity/User.js';

const authenticate = async (req :express.Request, res:express.Response, next:express.NextFunction) => {
    const token = req.headers['authorization'] || '';
    let tokenIsValid;
  
    try {
      tokenIsValid = jwt.verify(token, process.env.SECRET_KEY || '');
    } catch (error) { }
  
    if (tokenIsValid) {
      const decoded = jwt.decode(token, { json: true });
      try {
        const user = await User.findOne({ where: { email: decoded?.email || '' } });
        if (user) {
          res.locals.user = user;
          next();
        } else {
          res.status(401).send('You are Unauthorized!');
        }
      } catch (error) {
        res.status(500).send('Internal Server Error');
      }
    } else {
      res.status(401).send('You are Unauthorized!');
    }
  };
  
  export { authenticate };