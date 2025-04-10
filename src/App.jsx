import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import AllProducts from "./components/AllProducts";
import { Footer } from "./components/Footer";
import Cart from "./components/Cart";
import About from "./components/About";
import Slidebar from "./components/Slidebar";
import Contact from "./components/Contact";
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
