import { Fragment } from "react";
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import UltimateCollectionSection from "./components/UltimateCollectionSection";
import { Footer } from "./components/Footer";

// import CategorySection from "./components/CategorySection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturedSection />
      <UltimateCollectionSection />
      {/* <CategorySection /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
