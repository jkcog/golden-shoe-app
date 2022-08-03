import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import ShoppingBag from './screens/ShoppingBag';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<ProductList />} />
        <Route path="/category/:category" element={<ProductList />} />
        <Route path="/category/:category/q=:query" element={<ProductList />} />
        <Route path="/search/:query" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/bag" element={<ShoppingBag />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
