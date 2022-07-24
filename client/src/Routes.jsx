import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import ShoppingBag from './screens/ShoppingBag';
import AuthScreen from './screens/AuthScreen';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<ProductList />} />
        <Route path="/category/:category" element={<ProductList />} />
        <Route path="/search/:query" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<ShoppingBag />} />
        <Route path="/auth" element={<AuthScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
