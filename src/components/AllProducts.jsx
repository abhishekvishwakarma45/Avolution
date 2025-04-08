import React, { Fragment, useRef, useState, useEffect } from "react";
import { MdFilterList } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaSortAlphaUp, FaSortAlphaDownAlt } from "react-icons/fa";
import { TbSort09, TbSort90 } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FormatPrice from "./FormatPrice";
import { useFilterContext } from "./context/FilterContext";
import Product from "./Product";
import { FaSort } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const AllProducts = () => {
  gsap.registerPlugin(ScrollTrigger);
  const filterPin = useRef();
  const [sortvalue, setSortvalue] = useState();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const { getSortValue, FilterState, updateFilterValue, ClearFilter } =
    useFilterContext();
  const { filteredProducts, filter } = FilterState;
  const { price } = filter;

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.to(filterPin.current, {
        scrollTrigger: {
          trigger: filterPin.current,
          pin: true,
          pinSpacing: false,
          scrub: 2,
          start: "top top",
          end: "bottom 10% ",
        },
      });
    }
  }, []);

  useEffect(() => {
    getSortValue(sortvalue);
  }, [sortvalue]);

  function getfilterData(data, property) {
    if (!Array.isArray(data)) return [];
    if (property === "color") {
      return [...new Set(data.map((curr) => curr.color).flat())];
    }

    if (property === "size") {
      return [...new Set(data.map((curr) => curr.size).flat())];
    }
    return [...new Set(data.map((item) => item[property]))];
  }

  const Brand = getfilterData(filteredProducts, "brand");
  const Category = getfilterData(filteredProducts, "category");
  const Colors = getfilterData(filteredProducts, "color");
  const Price = getfilterData(filteredProducts, "price");
  const size = getfilterData(filteredProducts, "size");

  let minPrice = Math.min(...Price);
  let maxPrice = Math.max(...Price);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="w-auto h-auto AllProducts">
        <div className="flex flex-col justify-between w-full h-auto searchbar lg:flex-row">
          <div className="flex items-center justify-between w-full py-4 rounded-xs px-4 md:px-10 lg:px-20 ">
            <div>
              <span className="text-2xl cursor-pointer" onClick={toggleFilter}>
                <MdFilterList className="block md:hidden" />
              </span>
            </div>
            <div>
              <div className="flex justify-center w-full mx-auto">
                <div className="relative w-full px-2 py-2 cursor-pointer group">
                  <div className="flex items-center border border-gray-300 justify-end space-x-5">
                    <a className=" mx-4 my-2 text-base flex justify-center items-center font-medium text-black menu-hover text-nowrap">
                      {sortvalue ? sortvalue : "Sort By"}
                      <span className="mx-2">
                        <FaAngleDown />
                      </span>
                    </a>
                  </div>

                  <div className="absolute z-50 flex flex-col invisible w-full px-4 py-1 text-gray-800 bg-gray-100 shadow-xl group-hover:visible">
                    <a
                      className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                      onClick={() => setSortvalue("A-Z")}
                    >
                      <p className="flex items-center justify-between">
                        A-Z
                        <span>
                          <FaSortAlphaUp />
                        </span>
                      </p>
                    </a>
                    <a
                      className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                      onClick={() => setSortvalue("Z-A")}
                    >
                      <p className="flex items-center justify-between">
                        Z-A
                        <span>
                          <FaSortAlphaDownAlt />
                        </span>
                      </p>
                    </a>
                    <a
                      className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                      onClick={() => setSortvalue("1-9")}
                    >
                      <p className="flex items-center justify-between">
                        1-9
                        <span>
                          <TbSort09 />
                        </span>
                      </p>
                    </a>
                    <a
                      className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                      onClick={() => setSortvalue("9-1")}
                    >
                      <p className="flex items-center justify-between">
                        9-1
                        <span>
                          <TbSort90 />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center w-screen h-auto gap-4 my-6 px-4 md:px-10 lg:px-20 lg:grid"
          style={{ gridTemplateColumns: "25% 65%" }}
        >
          <div
            className={`w-full  z-50 h-screen p-2 border border-gray-400 rounded-lg shadow-xl filter-section fixed top-0 left-0 bg-white transition-transform duration-300 ease-in-out transform ${
              isFilterVisible ? "translate-x-0" : "translate-x-full"
            } lg:translate-x-0 lg:relative lg:block lg:w-auto lg:h-auto`}
            ref={filterPin}
          >
            <div className="p-2 my-2 capitalize">
              <p className="flex items-center justify-between text-xl font-bold text-gray-700">
                filter
                <span
                  className="text-2xl cursor-pointer"
                  onClick={toggleFilter}
                >
                  <MdFilterList className="hidden md:block" />
                  <RxCross2 className="block md:hidden" />
                </span>
              </p>
            </div>
            <hr />
            <div className="flex justify-center w-full mx-auto font-bold text-gray-700 bg-gray-200">
              <div className="relative w-full cursor-pointer group hover:bg-gray-100">
                <div className="flex items-center justify-between px-4 space-x-5 bg-white">
                  <a className="py-1 my-2 text-base menu-hover">Brand</a>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>

                <div className="absolute z-50 flex flex-col invisible w-full px-4 py-1 text-gray-800 bg-gray-100 shadow-xl group-hover:visible">
                  {Brand.map((current, idx) => {
                    return (
                      <a
                        key={idx}
                        className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                        value={current}
                        name="brand"
                        onClick={() => updateFilterValue("brand", current)}
                      >
                        {current}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="text-gray-400" />
            <div className="flex justify-center w-full mx-auto font-bold text-gray-700 bg-gray-200">
              <div className="relative w-full cursor-pointer group">
                <div className="flex items-center justify-between px-4 space-x-5 bg-white">
                  <a className="py-2 my-2 text-base menu-hover">Category</a>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>

                <div className="absolute z-50 flex flex-col invisible w-full px-4 py-1 text-gray-800 capitalize bg-gray-100 shadow-xl group-hover:visible">
                  {Category.map((current, idx) => {
                    return (
                      <a
                        className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                        key={idx}
                        onClick={() => updateFilterValue("category", current)}
                      >
                        {current}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="text-gray-400" />
            <div className="size-selection">
              <div className="w-auto font-semibold">
                <div className="grid grid-cols-6 p-4 space-x-2 font-bold text-gray-700 rounded place-items-center hover:bg-gray-100 accent-teal-600">
                  {size.map((current, index) => {
                    return (
                      <div className="my-1" key={index}>
                        <input
                          onClick={() => updateFilterValue("size", current)}
                          type="radio"
                          id="htmlCheckbox"
                          name="languageCheckbox"
                          className="w-6 h-6 text-blue-600 border-gray-300 rounded"
                        />
                        <p className="font-bold text-center text-gray-700">
                          {current}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="text-gray-400" />
            <div className="flex justify-center w-full mx-auto bg-gray-200">
              <div className="relative w-full cursor-pointer group">
                <div className="flex items-center justify-between px-4 space-x-5 bg-white">
                  <a className="py-2 my-2 text-base font-bold text-gray-700 menu-hover">
                    Color
                  </a>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>

                <div className="absolute z-50 flex flex-col invisible w-full px-4 py-1 font-bold text-gray-700 bg-gray-100 shadow-xl group-hover:visible">
                  {Colors.map((current, idx) => {
                    return (
                      <div className="flex my-1 text-center" key={idx}>
                        <span
                          className="px-4 py-1 h-auto w-auto rounded-full mx-2"
                          style={{ backgroundColor: current }}
                        ></span>
                        <a
                          className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                          onClick={() => updateFilterValue("color", current)}
                        >
                          {current}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="text-gray-400" />
            {/* Price Range Filter */}
            <div className="Price-range">
              <div className="w-full max-w-md p-2 bg-white">
                <div className="my-2">
                  <label
                    htmlFor="price-range"
                    className="block mb-2 font-bold text-gray-700"
                  >
                    Price Range
                  </label>
                  <input
                    type="range"
                    id="price-range"
                    className="w-full accent-indigo-600"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={(e) => updateFilterValue("price", e.target.value)}
                  />
                </div>
                <div className="flex justify-between text-gray-500">
                  <span id="minPrice">
                    <FormatPrice price={minPrice} />
                  </span>
                  <span id="maxPrice">
                    <FormatPrice price={maxPrice} />
                  </span>
                </div>
              </div>
            </div>

            <div className="my-8">
              <button
                onClick={ClearFilter}
                className="w-full h-auto py-4 font-bold text-white capitalize bg-red-500 rounded-xs"
              >
                clear
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((current, index) => {
              return <Product key={index} current={current} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AllProducts;
