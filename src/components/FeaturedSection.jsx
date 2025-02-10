import React from "react";
import { Fragment } from "react";
import Product from "./Product";
import useProductContext from "./context/ProductContext";
const FeaturedSection = () => {
  const { featuredProducts } = useProductContext();

  return (
    <Fragment>
      <div className="w-auto h-auto mt-20 mb-20">
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-extrabold uppercase"
            style={{ fontFamily: "Unbounded,poppins" }}
          >
            Elevate Your Experience <br />
            <h3 className="text-2xl">with Our Top Choices </h3>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-20 lg:px-40">
          {featuredProducts.map((curr, index) => {
            return <Product key={index} {...curr} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedSection;
