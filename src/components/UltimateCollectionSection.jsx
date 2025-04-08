import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router";
const UltimateCollectionSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const firstRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
      gsap.from(firstRef.current, {
        opacity: 0,
        x: -200,
        scrollTrigger: {
          trigger: firstRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
          // markers: true,
        },
      });

      gsap.from(secondRef.current, {
        opacity: 0,
        x: 200,
        scrollTrigger: {
          trigger: secondRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className="w-full  my-4 h-auto overflow-hidden px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
        <div className="w-full h-auto" ref={firstRef}>
          <div className="relative overflow-hidden w-full h-[50vh]">
            <img
              src="cropped.jpg"
              alt="Ultimate Collection"
              className="object-cover w-full h-full rounded-tr-4xl rounded-bl-4xl"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center p-4">
            <h1
              className="text-3xl md:text-4xl xl:text-4xl font-bold text-center text-gray-800 uppercase"
              style={{ fontFamily: "Unbounded, serif" }}
            >
              The Ultimate Collection – Perfect for Every Day.
            </h1>
            <NavLink to="/allproducts">
              <button className="mt-6 px-8 py-2 bg-black text-white uppercase font-bold rounded-xs transition-all hover:bg-gray-800">
                Explore Now
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            ref={secondRef}
            src="mohamad-khosravi-N88xBPX2-m8-unsplash.jpg"
            alt="Collection Display"
            className="object-cover w-full h-full rounded-tr-4xl rounded-bl-4xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default UltimateCollectionSection;
