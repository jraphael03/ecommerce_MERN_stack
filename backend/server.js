import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


// GET USERS FROM MONGODB
app.use('/api/users', userRouter);


// GET PRODUCTS FROM MONGODB
app.use('/api/products', productRouter);


app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});


app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})
