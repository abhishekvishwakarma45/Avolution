import React, { Fragment } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="hero-section-container  h-auto w-screen flex flex-col lg:grid grid-cols-2 p-4 ">
        <div className="flex justify-center items-center text-center lg:text-left">
          <div className="hero-section-content p-6 flex flex-col justify-center items-center lg:items-start">
            <h1 className="uppercase font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">
              Find Your <br />
              True Style <br />
              Here
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              eveniet dolore unde quod nihil ex dolor nemo sunt rerum debitis
              eaque dolorum, provident sapiente impedit voluptatem! Tempora
              dicta, porro vel laborum dolores deserunt suscipit libero enim
              iusto ducimus odio fugiat aspernatur necessitatibus, modi
              dignissimos? Rem labore officiis sapiente vitae facilis!
            </p>
            <button className="mt-2 pr-8 pl-8 pt-4 pb-4 rounded-ee-3xl rounded-tl-3xl bg-black text-white flex justify-center items-center">
              Shop now
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>

        <div className=" p-4 hero-image-container h-full w-full object-cover">
          <img
            className="h-full w-full object-cover rounded-tl-3xl rounded-br-4xl"
            src="https://images.unsplash.com/photo-1632149933606-fa45623682ee?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
