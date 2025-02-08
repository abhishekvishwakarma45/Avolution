import React, { Fragment } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="hero-section-container  h-auto w-screen flex flex-col lg:grid grid-cols-2 p-4 ">
        <div className="flex justify-center items-center text-center lg:text-left">
          <div className="hero-section-content p-6 flex flex-col justify-center items-center lg:items-start">
            <h1 className="uppercase font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">
              Discover Your <br />
              Authentic Style <br />
              Here
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Unlock the essence of your individuality with our exclusive style
              guide. Meticulously tailored to highlight your best features, our
              curated collection guarantees you stand out with unwavering
              confidence and unparalleled elegance. Dare to be unique—embrace
              your true style today and let your authentic self shine like never
              before.
            </p>
            <button className="mt-2 pr-8 pl-8 pt-4 pb-4 rounded-ee-3xl rounded-tl-3xl bg-black text-white flex justify-center items-center">
              Shop now
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>

        <div className=" p-4 hero-image-container h-[90vh] w-full object-cover">
          <img
            className="h-full w-full object-cover rounded-tl-3xl rounded-br-4xl"
            src="ellee-morr-Yx_Fw-XYroU-unsplash.jpg"
            alt="Fashion"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
