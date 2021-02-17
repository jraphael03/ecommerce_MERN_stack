import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();   //express Router allows multiple files to contain routers


productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);


productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});          // empty obj means return all products
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);


// API FOR PRODUCT DETAILS
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);// This needs to be below seed if it's above seed will be treated as an id

export default productRouter;