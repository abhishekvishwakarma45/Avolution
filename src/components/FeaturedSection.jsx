import React, { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Product from "./Product";
import useProductContext from "./context/ProductContext";

gsap.registerPlugin(ScrollTrigger);

const FeaturedSection = () => {
  const { state } = useProductContext();
  const { featuredProducts } = state;

  const animatedTextRef = useRef(null);

  useEffect(() => {
    if (animatedTextRef.current) {
      const lines = animatedTextRef.current.querySelectorAll(".line");

      lines.forEach((line) => {
        const text = line.textContent;
        line.innerHTML = text
          .split("")
          .map((char) =>
            char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
          )
          .join("");
      });

      const allSpans = animatedTextRef.current.querySelectorAll("span");

      gsap.from(allSpans, {
        scrollTrigger: {
          trigger: animatedTextRef.current,
          start: "top 90%",
          end: "top 35%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <Fragment>
      <div className="w-auto h-auto my-10">
        <div className="flex flex-col items-center justify-center text-center mb-10 px-4 md:px-10 lg:px-20">
          <h1
            className="text-3xl  lg:text-4xl font-extrabold uppercase leading-snug"
            style={{ fontFamily: "Unbounded, poppins" }}
          >
            <div className="line block">Elevate Your Experience</div>
            <div className="line block text-2xl mt-2">with Our Top Choices</div>
          </h1>
          <hr className="w-full text-gray-400 mt-8" />
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
