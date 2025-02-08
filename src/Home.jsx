import { Fragment } from "react";
import Header from "./components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <FeaturedSection />
    </Fragment>
  );
};

export default Home;
