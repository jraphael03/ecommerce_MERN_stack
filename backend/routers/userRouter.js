import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js'

const userRouter = express.Router();        //express Router allows multiple files to contain routers

userRouter.get('/seed', expressAsyncHandler (async (req, res) => {
    await User.remove({});      // Removes all users before creating new users again
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers })
}));

export default userRouter;