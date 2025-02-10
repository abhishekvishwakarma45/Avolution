import React from "react";
import { Fragment } from "react";
const UltimateCollectionSection = () => {
  return (
    <Fragment>
      <div className="flex-col w-screen h-auto sm:flex md:grid md:grid-cols-2 lg:grid-cols-2 place-items-center sm:px-20 lg:px-40">
        <div className="w-full h-auto">
          <div className="object-cover p-4 " style={{ height: "50vh" }}>
            <img
              src="cropped.jpg"
              alt=""
              className="object-cover w-full h-full rounded-tr-4xl rounded-bl-4xl"
              loading="lazy"
            />
          </div>
          <div className="grid w-full h-auto p-4 content place-items-center">
            <h1
              className="text-3xl font-bold text-center uppercase sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl"
              style={{ fontFamily: "Unbounded,serif" }}
            >
              The Ultimate Collection – Perfect for Every Day.
            </h1>
            <button className="flex pt-2 pb-2 pl-8 pr-8 mt-6 font-bold text-white uppercase transition-all ease-in bg-black rounded-xs ">
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-auto" style={{ height: "70vh" }}>
          <img
            className="object-cover w-auto h-full rounded-tr-4xl rounded-bl-4xl"
            src="        mohamad-khosravi-N88xBPX2-m8-unsplash.jpg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UltimateCollectionSection;
