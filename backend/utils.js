import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || 'somethingsecret',     //JWT or alternative text  // PUT JSONWEBTOKEN IN SECRET ENV FILE FOR SECURITY, the value of JSON WEB TOKEN will be the value set in .env file
      {
          expiresIn: '30d',       // TOKEN EXPIRES IN 30 DAYS
      }
    );
};
