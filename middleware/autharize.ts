import express from 'express';

const authorize = (req :express.Request, res:express.Response, next:express.NextFunction) => {
  const user = res.locals.user; 

  if (!user) {
    return res.status(401).send('You are Unauthorized!');
  }

 

  next(); 
};

export { authorize };
