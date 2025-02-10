import { Fragment } from "react";
import Header from "./components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import UltimateCollectionSection from "./components/UltimateCollectionSection";

import CategorySection from "./components/CategorySection";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <CategorySection />
      <UltimateCollectionSection />
    </Fragment>
  );
};

export default Home;
