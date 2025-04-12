import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const UltimateCollectionSection = () => {
  const videoRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    gsap.from(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 2,
    });

    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        toggleActions: "play none none none",
      },
      rotationX: 180,
      opacity: 0,
      duration: 2,
    });
  }, []);

  return (
    <section className="w-full my-8 h-auto overflow-hidden px-4 md:px-10 lg:px-20">
      <div
        className="relative w-full h-[70vh] rounded-sm  overflow-hidden shadow-lg"
        ref={videoRef}
      >
        <video
          className="object-cover w-full h-full"
          src="https://res.cloudinary.com/dqktbs8zx/video/upload/v1744439111/e7uqzej1wgeu6quemrzd.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1
            ref={headingRef}
            className="text-3xl md:text-4xl xl:text-4xl font-bold text-white uppercase"
            style={{ fontFamily: "Unbounded, serif" }}
          >
            The Ultimate Collection –{" "}
            <span className="text-2xl block mt-1">Perfect for Every Day.</span>
          </h1>
          <NavLink to="/allproducts">
            <button className="mt-4 px-12 py-2  bg-white text-black uppercase font-bold rounded-xs transition-all ease-in hover:bg-transparent border border-white hover:text-white">
              Explore Now
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default UltimateCollectionSection;
