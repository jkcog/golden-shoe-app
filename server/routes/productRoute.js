import express from 'express';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Product from '../models/productModel.js';

const productRoute = express.Router();

// Fetch all products
productRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// Fetch product by search query
productRoute.get(
  '/search/:query/sort/:sort/:direction',
  asyncHandler(async (req, res) => {
    console.log(req.params.sort);
    const sortType = {};
    sortType[req.params.sort] = req.params.direction;
    const products = await Product.find({
      title: { $regex: req.params.query, $options: 'i' },
    }).sort(sortType);
    console.log(products);
    res.json(products);
  })
);

// Fetch product by search query
productRoute.get(
  '/search/:query',
  asyncHandler(async (req, res) => {
    const products = await Product.find({
      title: { $regex: req.params.query, $options: 'i' },
    });
    console.log(products);
    res.json(products);
  })
);

// Fetch product by search query
productRoute.get(
  '/category/:category/sort/:sort/:direction',
  asyncHandler(async (req, res) => {
    console.log(req.params.sort);
    const sortType = {};
    sortType[req.params.sort] = req.params.direction;
    const products = await Product.find({
      categories: req.params.category,
    }).sort(sortType);
    console.log(products);
    res.json(products);
  })
);

// Fetch product by category
productRoute.get(
  '/category/:category',
  asyncHandler(async (req, res) => {
    const products = await Product.find({ categories: req.params.category });
    res.json(products);
  })
);

// Fetch individual product
productRoute.get(
  '/:id',
  asyncHandler(async (req, res) => {
    console.log('single product route');
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      throw new Error('No product found');
    }
  })
);

export default productRoute;
