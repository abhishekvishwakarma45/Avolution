import React, { Fragment, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    if (searchValue) {
      navigate(`/allproducts?value=${searchValue}`);
    }
  };
  return (
    <Fragment>
      <div className="flex flex-col w-screen h-auto grid-cols-2 p-4 hero-section-container lg:grid ">
        <div className="flex items-center justify-center text-center lg:text-left">
          <div className="flex flex-col items-center justify-center px-6 py-4 hero-section-content lg:items-start">
            <h1
              className="mb-4 text-4xl font-extrabold uppercase sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Unbounded,serif" }}
            >
              Discover Your <br />
              Authentic Style <br />
              Here
            </h1>
            <p className="mb-6 text-lg lg:text-xl">
              Unlock the essence of your individuality with our exclusive style
              guide. Meticulously tailored to highlight your best features, our
              curated collection guarantees you stand out with unwavering
              confidence and unparalleled elegance. Dare to be unique—embrace
              your true style today and let your authentic self shine like never
              before.
            </p>
            <NavLink to="/allproducts">
              <button className="hidden lg:flex items-center justify-center pt-4 pb-4 pl-8 pr-8 mt-2 text-white bg-black rounded-ee-3xl rounded-tl-3xl">
                Shop now
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </button>
            </NavLink>
            <div>
              <form
                onSubmit={handleSearch}
                className=" flex items-center justify-center w-full py-2 rounded-xs lg:hidden "
              >
                <div className="border flex items-center rounded-tl-xl rounded-ee-xl justify-center overflow-hidden">
                  <input
                    type="text"
                    name="search"
                    className="w-auto h-auto px-3 py-2 outline-none  text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-xs  "
                    placeholder="Search anything..."
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-2xl bg-amber-300"
                  >
                    <IoIosSearch />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="object-cover w-full p-4  hero-image-container"
          style={{ height: "90vh" }}
        >
          <img
            className="object-cover w-full h-full rounded-tl-3xl rounded-br-4xl"
            // src="ellee-morr-Yx_Fw-XYroU-unsplash.jpg"
            src="reza-delkhosh-Ms5iR0egFOM-unsplash.jpg"
            alt="Fashion"
            loading="lazy"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
