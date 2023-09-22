import express from 'express';

const authorize = () => {
  return (req:express.Request, res:express.Response, next:express.NextFunction) => {
    const user = res.locals.user; 

    if (!user) {
      return res.status(401).send('You are Unauthorized!');
    }

    if (user.roles.includes('admin')) {
      next();
    } else {
      if (user.permissions.includes('editor'||'user')) {
        next(); 
      } else {
        res.status(403).send('You do not have permission to access this resource.');
      }
    }
  };
};

export { authorize };
