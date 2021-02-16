import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


app.get('/', (req, res) => {
    res.send('Server is ready');
})


app.use('/api/users', userRouter);


// GRABBING PRODUCTS FROM DATA.JS
app.get('/api/products', (req, res) => {
    res.send(data.products)
})


// GRABBING PRODUCT FROM DATA.JS
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find( x => x._id === req.params.id);
  if(product){
      res.send(product);
  } else{
      res.status(404).send({ message: 'Product not Found' })
  }
});


// Error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});


app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})
