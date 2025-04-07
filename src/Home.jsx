import { Fragment } from "react";
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import UltimateCollectionSection from "./components/UltimateCollectionSection";

import ExclusiveSection from "./components/ExclusiveSection";
import Review from "./components/Review";
import BrandCarousel from "./components/Brands";
import Slidebar from "./components/Slidebar";
const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturedSection />
      <UltimateCollectionSection />
      <BrandCarousel />
      <ExclusiveSection />
      <Review />
      <Slidebar />
    </Fragment>
  );
};

export default Home;
