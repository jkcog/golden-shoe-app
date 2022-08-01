import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const productRoute = express.Router();

const productsPerPage = 6;

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
  '/search',
  asyncHandler(async (req, res) => {
    const pageNum = Number(req.query.page);
    const sortType = {};
    const sortBy = req.query.sortBy;
    const sortDir = req.query.sortDir;
    sortBy ? (sortType[sortBy] = sortDir) : null;
    const productCount = await Product.countDocuments({
      title: { $regex: req.query.query, $options: 'i' },
    });
    const products = await Product.find({
      title: { $regex: req.query.query, $options: 'i' },
    })
      .limit(productsPerPage * pageNum)
      .sort(sortType);
    res.json({
      products,
      page: pageNum,
      pages: Math.ceil(productCount / productsPerPage),
    });
  })
);

// Fetch products by category
productRoute.get(
  '/category/',
  asyncHandler(async (req, res) => {
    const pageNum = Number(req.query.page);
    const sortType = {};
    const sortBy = req.query.sortBy;
    const sortDir = req.query.sortDir;
    sortBy ? (sortType[sortBy] = sortDir) : null;

    // get all categories
    const query = req.query.query.split(',');

    const productCount = await Product.countDocuments({
      categories: { $all: query },
    });
    const products = await Product.find({
      categories: { $all: query },
    })
      .limit(productsPerPage)
      .skip(productsPerPage * (pageNum - 1))
      .sort(sortType);

    res.json({
      products,
      page: pageNum,
      pages: Math.ceil(productCount / productsPerPage),
    });
  })
);

// Fetch individual product
productRoute.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      throw new Error('No product found');
    }
  })
);

export default productRoute;
