import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
