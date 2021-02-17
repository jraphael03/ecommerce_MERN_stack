import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js'
import { generateToken } from '../utils.js';

const userRouter = express.Router();        //express Router allows multiple files to contain routers

userRouter.get('/seed', expressAsyncHandler (async (req, res) => {
    // await User.remove({});      // Removes all users before creating new users again
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers })
}));


// SIGNIN FOR WEBPAGE
userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password )){          //compares the password input to the hashed pass
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)      //generates hashed string that needs to be used for the next request to authenticate request
            });
            return;
        }       
    }
    res.status(401).send({ message: 'Invalid email or password' })
}))


export default userRouter;