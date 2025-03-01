import React from "react";
import { Fragment } from "react";

import FormatPrice from "./FormatPrice";
// import "animate.css";

const Product = ({ current }) => {
  const { id, name, brand, price, color, image, size } = current;

  return (
    <Fragment>
      <a href={`/product/${id}`}>
        <div
          className="w-full h-auto p-2 m-2 "
          style={{ boxShadow: "0 2px 7px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="w-auto image-container" style={{ height: "35vh" }}>
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full rounded-xs"
              loading="lazy"
            />

            <span
              className="relative p-2 pl-6 pr-6 text-xs text-white bg-black rounded-4xl left-2 "
              style={{ top: "-95%" }}
            >
              20%
            </span>
          </div>

          <div className="w-full h-auto p-3 text-left product-desc capitalise">
            <p className="mt-1 uppercase">{brand}</p>
            <p className="mt-1 text-lg font-bold ">{name}</p>
            <p className="mt-1 mb-2 font-bold">
              <FormatPrice price={price} />
            </p>
            <div className="w-auto h-auto mt-2 color-container">
              {Array.isArray(color)
                ? color.map((curr, index) => {
                    return (
                      <button
                        key={index}
                        className="p-3 mr-2 border border-gray-400 rounded-xs"
                        style={{ backgroundColor: curr }}
                      ></button>
                    );
                  })
                : []}
            </div>
            <div className="mt-2">
              {Array.isArray(size)
                ? size.map((curr, index) => {
                    return (
                      <button
                        key={index}
                        className="p-2 my-2 mr-2 text-xs text-white uppercase bg-black rounded-xs"
                      >
                        {curr}
                      </button>
                    );
                  })
                : []}
            </div>
          </div>
        </div>
      </a>
    </Fragment>
  );
};

export default Product;
