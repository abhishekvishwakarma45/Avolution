import { Fragment } from "react";

import React from "react";

export const Footer = () => {
  return (
    <Fragment>
      <div
        className="bg-black text-white  w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-4 md:p-15 lg:p-30"
        style={{ fontFamily: "Manrope" }}
      >
        <div className="text-center p-4 border-l border-r">
          <p className="font-bold text-lg capitalize">E-commerce Store</p>
          <p className=" text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="text-center p-4 border-l border-r">
          <p className="font-bold text-lg capitalize">
            Subscribe to get More Updates
          </p>
          <div className="flex justify-center items-center  p-4">
            <input
              type="text"
              placeholder="Enter Your E-mail:"
              className="border-1 p-3 text-white"
            />
            <button className="text-black p-3 bg-amber-300  border-1 border-black text-sm">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center p-4 border-l border-r">
          <p className="font-bold text-lg capitalize mb-2">Get in touch</p>
          <p>
            Mobile: (+91) 7385097588
            <br />
            Email: abhishekv0045@gmail.com
          </p>
        </div>
      </div>
    </Fragment>
  );
};
