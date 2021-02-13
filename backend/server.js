import express from 'express';
import data from './data.js'

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is ready');
})


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



app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})
