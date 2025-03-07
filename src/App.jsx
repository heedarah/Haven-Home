import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import SingleProduct from "./Components/Pages/Single-Product";
import CartPage from "./Components/Pages/CartPage";
import FaqPage from "./Components/Pages/FaqPage";
import { CartProvider } from "react-use-cart";
import Collections from "./Components/Collections";
import Checkout from "./Components/Pages/checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
