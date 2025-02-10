import React, { useRef, useEffect, Fragment } from "react";
import gsap from "gsap";
import { FaArrowLeft } from "react-icons/fa6";

const CategorySection = () => {
  const categoryRef = useRef(null);

  useEffect(() => {
    gsap.to(categoryRef.current, {
      x: "-100%",
      duration: 100,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <Fragment>
      <div
        id="category"
        className="relative grid w-full h-auto mt-10 mb-10 content place-items-center bg-amber-300 overflow-hidden"
      >
        <h1
          ref={categoryRef}
          className="text-3xl p-4 font-bold text-nowrap text-center uppercase sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl"
          style={{
            fontFamily: "Unbounded, serif",
            whiteSpace: "nowrap",
          }}
        >
          discover what&apos;s new & exciting discover what&apos;s new &
          exciting discover what&apos;s new & exciting discover what&apos;s new
          & exciting discover what&apos;s new & exciting discover what&apos;s
          new & exciting discover what&apos;s new & exciting discover
          what&apos;s new & exciting
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid w-screen h-auto gap-4 p-4 pb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:px-20 lg:px-40">
        <div
          className="flex items-end justify-center p-4 m-5"
          style={{
            height: "70vh",
            backgroundImage:
              "url(portrait-young-japanese-woman-with-jacket.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-auto">
            <button className="w-full h-auto pt-3 pb-3 text-xs font-bold text-black uppercase bg-white rounded-xs">
              Women
            </button>
          </div>
        </div>
        <div
          className="flex items-end justify-center p-4 m-5"
          style={{
            height: "70vh",
            backgroundImage: "url(mohamad-khosravi-0t_7_-ZTN0g-unsplash.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-auto">
            <button className="w-full h-auto pt-3 pb-3 text-xs font-bold text-black uppercase bg-white rounded-xs">
              Men
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CategorySection;
