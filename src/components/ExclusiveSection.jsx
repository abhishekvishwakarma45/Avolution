import React, { useRef, useEffect, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

const ExclusiveSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const categoryRef = useRef();
  const eleganceTextRef = useRef();
  const labelTextRef = useRef(); // New ref for "Armani Exclusives"
  const imageRef = useRef();
  const smDivsRef = useRef([]);

  useEffect(() => {
    // Infinite scrolling for big heading
    gsap.to(categoryRef.current, {
      x: "-100%",
      duration: 100,
      repeat: -1,
      ease: "linear",
    });

    const animateStaggeredText = (element) => {
      if (!element) return;

      const originalText = element.textContent;
      element.innerHTML = originalText
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");

      gsap.from(element.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 35%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 2.5,
        stagger: 0.07,
      });
    };

    // Apply staggered effect to both texts
    animateStaggeredText(eleganceTextRef.current);
    animateStaggeredText(labelTextRef.current);

    // Fade-in animation for image
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 2.5,
    });

    // Fade-in animation for product cards
    smDivsRef.current.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 2.5,
      });
    });
  }, []);

  return (
    <Fragment>
      {/* Scrolling heading */}
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
        {/* Image section */}
        <div className="flex items-end justify-center p-4">
          <img
            ref={imageRef}
            src="/giorgio-armani-main.jpeg"
            className="object-cover w-full h-full"
            alt="Giorgio Armani Collection"
          />
        </div>

        {/* Text + Cards section */}
        <div className="grid place-content-center">
          <div className="w-full h-auto p-4 overflow-hidden">
            <p ref={labelTextRef} className="text-gray-700">
              Armani Exclusives
            </p>
            <p
              ref={eleganceTextRef}
              className="text-4xl my-2 uppercase font-bold"
              style={{ fontFamily: "unbounded" }}
            >
              Timeless Elegance in Fashion, Fragrance, and Watches
            </p>
            <NavLink to="/allproducts">
              <button className="flex items-center justify-center pt-4 pb-4 pl-8 pr-8 my-4 text-white bg-black rounded-xs ">
                Shop now
              </button>
            </NavLink>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-4 p-2 my-4 place-items-center">
            {/* Product Cards */}
            <div
              className="w-full h-auto rounded-xs"
              style={{ boxShadow: " rgba(0, 0, 0, 0.3) 0px 2px 7px" }}
              ref={(el) => (smDivsRef.current[0] = el)}
            >
              <img
                src="/giorgio-armani-watch.jpeg"
                alt="Armani Watch"
                className="object-contain w-full h-full"
              />
            </div>
            <div
              className="w-full h-auto rounded-xs"
              style={{ boxShadow: " rgba(0, 0, 0, 0.3) 0px 2px 7px" }}
              ref={(el) => (smDivsRef.current[1] = el)}
            >
              <img
                src="/giorgio-armani-perfume.jpeg"
                alt="Armani Perfume"
                className="object-contain w-full h-full"
              />
            </div>
            <div
              className="w-full h-auto rounded-xs"
              style={{ boxShadow: " rgba(0, 0, 0, 0.3) 0px 2px 7px" }}
              ref={(el) => (smDivsRef.current[2] = el)}
            >
              <img
                src="/giorgio-armani-bag.jpeg"
                alt="Armani Bag"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExclusiveSection;
