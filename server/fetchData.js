import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from './models/productModel.js';
import products from './data/products.js';

const fetchData = express.Router();

fetchData.post(
  '/products',
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProduct = await Product.insertMany(products);
    res.send({ importProduct });
  })
);

export default fetchData;
