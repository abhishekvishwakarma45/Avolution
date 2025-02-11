import { Fragment } from "react";
import Header from "./components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import UltimateCollectionSection from "./components/UltimateCollectionSection";
import { Footer } from "./components/Footer";

import CategorySection from "./components/CategorySection";
import ProductPage from "./components/ProductPage";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <UltimateCollectionSection />
      {/* <CategorySection /> */}
      <ProductPage />
      <Footer />
    </Fragment>
  );
};

export default Home;
