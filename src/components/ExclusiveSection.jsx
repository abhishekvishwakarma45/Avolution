import React, { useRef, useEffect, Fragment } from "react";
import gsap from "gsap";
import { FaArrowLeft } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExclusiveSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const categoryRef = useRef();
  const firstRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.from(firstRef.current, {
        opacity: 0,
        y: 200,
        scrollTrigger: {
          trigger: firstRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      gsap.from(secondRef.current, {
        opacity: 0,
        yPercent: -200,
        scrollTrigger: {
          trigger: ".container",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      gsap.to(categoryRef.current, {
        x: "-100%",
        duration: 100,
        repeat: -1,
        ease: "linear",
      });

      gsap.from(".sm-divs", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".container",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
          ease: "linear",
        },
      });
    }
  }, []);

  return (
    <Fragment>
      <div
        id="category"
        className="relative grid w-full h-auto my-6 overflow-hidden content place-items-center bg-amber-300"
      >
        <h1
          ref={categoryRef}
          className="p-4 text-3xl font-bold text-center uppercase text-nowrap sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl"
          style={{
            fontFamily: "Unbounded, serif",
            whiteSpace: "nowrap",
          }}
        >
          Experience luxury with Armani's exclusive collection. From refined
          clothing and iconic watches to signature perfumes, each piece embodies
          elegance and timeless style.
        </h1>
      </div>

      <div className="grid w-screen h-auto overflow-hidden container sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:px-20 lg:px-40">
        <div className="flex items-end justify-center p-4">
          <img
            ref={firstRef}
            src="/giorgio-armani-main.jpeg"
            className="object-cover w-full h-full"
            alt="Giorgio Armani Collection"
          />
        </div>

        <div className="grid place-content-center">
          <div className="w-full h-auto p-4 overflow-hidden" ref={secondRef}>
            <p className="text-gray-700">Armani Exclusives</p>
            <p
              className="text-4xl my-2 uppercase font-bold"
              style={{ fontFamily: "unbounded" }}
            >
              Timeless Elegance in Fashion, Fragrance, and Watches
            </p>
            <button className="flex items-center justify-center pt-4 pb-4 pl-8 pr-8 my-4 text-white bg-black rounded-xs ">
              Shop now
            </button>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-4 p-2 my-4 place-items-center">
            <div
              className="w-full h-auto rounded-xs"
              style={{ boxShadow: " rgba(0, 0, 0, 0.3) 0px 2px 7px" }}
            >
              <img
                src="/giorgio-armani-watch.jpeg"
                alt="Armani Watch"
                className="object-contain sm-divs w-full h-full"
              />
            </div>
            <div
              className="w-full h-auto rounded-xs"
              style={{ boxShadow: " rgba(0, 0, 0, 0.3) 0px 2px 7px" }}
            >
              <img
                src="/giorgio-armani-perfume.jpeg"
                alt="Armani Perfume"
                className="object-contain sm-divs w-full h-full"
              />
            </div>
            <div
              className="w-full h-auto rounded-xs"
              style={{ boxShadow: " rgba(0, 0, 0, 0.3) 0px 2px 7px" }}
            >
              <img
                src="/giorgio-armani-bag.jpeg"
                alt="Armani Bag"
                className="object-contain sm-divs w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExclusiveSection;
