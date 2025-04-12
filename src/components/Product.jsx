import React, { useRef, useEffect } from "react";
import { Fragment } from "react";
import FormatPrice from "./FormatPrice";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const Product = ({ current }) => {
  const { id, name, brand, price, color, image, size } = current;
  const productRef = useRef();

  useEffect(() => {
    gsap.from(productRef.current, {
      opacity: 0,

      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: productRef.current,
        start: "top 90%",
        end: "bottom 10%",
        scrub: false,
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <Fragment>
      <NavLink to={`/product/${id}`}>
        <div
          ref={productRef}
          className="w-full h-auto p-2"
          style={{ boxShadow: "0 2px 7px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="w-auto image-container" style={{ height: "35vh" }}>
            <img
              src={image[0]}
              alt=""
              className="object-cover w-full h-full rounded-xs"
              loading="lazy"
            />
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
      </NavLink>
    </Fragment>
  );
};

export default Product;
