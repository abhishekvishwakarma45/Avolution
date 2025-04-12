import React, { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Product from "./Product";
import useProductContext from "./context/ProductContext";

gsap.registerPlugin(ScrollTrigger);

const FeaturedSection = () => {
  const { state } = useProductContext();
  const { featuredProducts } = state;

  const animatedText = useRef(null);

  useEffect(() => {
    if (animatedText.current) {
      gsap.from(animatedText.current, {
        scrollTrigger: {
          trigger: animatedText.current,
          start: "top 90%",
          end: "top 40%",
        },
        scale: 2,
        opacity: 0,
        duration: 0.8, // Added duration for faster animation
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <Fragment>
      <div className="w-auto h-auto my-10">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h1
            ref={animatedText}
            className="text-4xl font-extrabold uppercase transition-all duration-1000 ease-in-out"
            style={{ fontFamily: "Unbounded,poppins" }}
          >
            Elevate Your Experience <br />
            <span className="text-2xl block mt-2">with Our Top Choices</span>
          </h1>
          <hr className="w-[80%] text-gray-400 mt-8" />
        </div>
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-20 lg:px-40">
          {featuredProducts.map((curr, index) => (
            <Product key={index} current={curr} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedSection;
