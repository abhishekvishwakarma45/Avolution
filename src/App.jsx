import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import AllProducts from "./components/AllProducts";
import { Footer } from "./components/Footer";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Slidebar from "./components/Slidebar";
const App = () => {
  return (
    <Router>
      <Header />
      <Cart />
      <Slidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/allproducts/" element={<AllProducts />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
