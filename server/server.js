import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import products from './data/products.js';
import dbConnect from './mongoDb.js';
import fetchData from './fetchData.js';
import productRoute from './routes/productRoute.js';

dbConnect();
const app = express();

const port = process.env.PORT || 5000;

app.use('/api/import', fetchData);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send(`API running`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
