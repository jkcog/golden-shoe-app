import express from 'express';
import 'dotenv/config';
import dbConnect from './mongoDb.js';
import fetchData from './fetchData.js';
import productRoute from './routes/productRoute.js';
import cors from 'cors';

dbConnect();
const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use('/api/import', fetchData);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send(`API running`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
