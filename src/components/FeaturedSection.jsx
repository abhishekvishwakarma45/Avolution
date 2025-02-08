import React from "react";
import { Fragment } from "react";

const FeaturedSection = () => {
  return (
    <Fragment>
      <div className="featured-section-container pr-4 pl-4 h-auto w-screen flex flex-col justify-center items-center lg:grid grid-cols-2 place-items-center ">
        <div className="w-full h-auto">
          <div className="p-4 object-cover " style={{ height: "70vh" }}>
            <img
              src="cropped.jpg"
              alt=""
              className="h-full w-full object-cover  rounded-tr-4xl  rounded-bl-4xl"
            />
          </div>
          <div className="content h-auto w-full grid place-items-center p-4">
            <h1 className="text-5xl capitalize font-extrabold text-center">
              The Ultimate Collection – Perfect for Every Day.
            </h1>
            <button className="flex pt-2 pb-2 pl-8 pr-8 mt-6 rounded-xs font-bold text-white uppercase transition-all ease-in bg-black ">
              Explore Now
            </button>
          </div>
        </div>
        <div className="p-4 w-auto " style={{ height: "100vh" }}>
          <img
            className=" h-full w-auto object-cover"
            src="pexels-alessandra-shalbe-859114866-20446138.jpg"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedSection;
