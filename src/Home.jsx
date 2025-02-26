import { Fragment } from "react";
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import UltimateCollectionSection from "./components/UltimateCollectionSection";

import ExclusiveSection from "./components/ExclusiveSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturedSection />
      <UltimateCollectionSection />
      <ExclusiveSection />
    </Fragment>
  );
};

export default Home;
