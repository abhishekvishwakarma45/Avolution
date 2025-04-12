import React, { Fragment, useRef, useState, useEffect } from "react";
import { MdFilterList } from "react-icons/md";
import {
  FaAngleDown,
  FaSortAlphaUp,
  FaSortAlphaDownAlt,
  FaSort,
} from "react-icons/fa";
import { TbSort09, TbSort90 } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FormatPrice from "./FormatPrice";
import { useFilterContext } from "./context/FilterContext";
import Product from "./Product";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const AllProducts = () => {
  gsap.registerPlugin(ScrollTrigger);
  const filterPin = useRef();
  const [sortvalue, setSortvalue] = useState();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const { getSortValue, FilterState, updateFilterValue, ClearFilter } =
    useFilterContext();
  const { filteredProducts, filter } = FilterState;
  const { price } = filter;

  // useEffect(() => {
  //   const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  //   if (isDesktop) {
  //     gsap.to(filterPin.current, {
  //       scrollTrigger: {
  //         trigger: filterPin.current,
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: 2,
  //         start: "top top",
  //         end: "bottom 10%",
  //       },
  //     });
  //   }
  // }, []);

  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("value");
    if (search) {
      setSearchQuery(search);
      updateFilterValue("searchvalue", search);
    }
  }, [location]);

  useEffect(() => {
    getSortValue(sortvalue);
  }, [sortvalue]);

  function getfilterData(data, property) {
    if (!Array.isArray(data)) return [];
    if (property === "color")
      return [...new Set(data.map((curr) => curr.color).flat())];
    if (property === "size")
      return [...new Set(data.map((curr) => curr.size).flat())];
    return [...new Set(data.map((item) => item[property]))];
  }

  const Brand = getfilterData(filteredProducts, "brand");
  const Category = getfilterData(filteredProducts, "category");
  const Colors = getfilterData(filteredProducts, "color");
  const Price = getfilterData(filteredProducts, "price");
  const size = getfilterData(filteredProducts, "size");
  let minPrice = Math.min(...Price);
  let maxPrice = Math.max(...Price);

  const toggleFilter = () => setIsFilterVisible((prev) => !prev);

  return (
    <Fragment>
      <div className="w-auto h-auto AllProducts">
        <div className="flex flex-col justify-between w-full h-auto searchbar lg:flex-row">
          <div className="flex justify-between items-center  w-full py-2 rounded-xs px-4 md:px-10 lg:px-20 ">
            <div className="flex justify-between  lg:justify-start items-center en">
              <span
                className="text-3xl px-2 cursor-pointer"
                onClick={toggleFilter}
              >
                <MdFilterList className="block md:hidden" />
              </span>
              <p className="text-sm uppercase px-8 font-extrabold text-indigo-400 flex justify-center items-center  my-4">
                <NavLink to="/">
                  <span className="transition ease-in  hover:text-black ">
                    Home
                  </span>
                </NavLink>
                <span className="text-black mx-1">
                  <IoIosArrowForward />
                </span>
                <NavLink to="/allproducts">
                  <span className="text-black ">products</span>
                </NavLink>
              </p>
            </div>

            <div className="flex justify-end items-center w-auto">
              <div className="relative max-w-full ml-auto mr-0">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 bg-white text-black font-medium rounded cursor-pointer"
                >
                  {sortvalue ? sortvalue : "Sort By"}
                  <FaAngleDown className="ml-2" />
                </button>

                {sortOpen && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
                    {[
                      { label: "A-Z", icon: <FaSortAlphaUp /> },
                      { label: "Z-A", icon: <FaSortAlphaDownAlt /> },
                      { label: "1-9", icon: <TbSort09 /> },
                      { label: "9-1", icon: <TbSort90 /> },
                    ].map(({ label, icon }) => (
                      <a
                        key={label}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSortvalue(label);
                          setSortOpen(false);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          {label}
                          {icon}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {isFilterVisible && (
          <div
            className="fixed inset-0 bg-gray-500/75 z-[50] transition-opacity"
            onClick={toggleFilter}
          ></div>
        )}
        <hr className="mx-4 md:mx-10 lg:mx-20 border-t border-gray-400" />

        <div
          className="flex justify-center w-screen h-auto gap-4 my-6 px-4 md:px-10 lg:px-20 lg:grid"
          style={{ gridTemplateColumns: "25% 65%" }}
        >
          <div
            className={`w-[80vw] z-[60] h-screen p-2 border border-gray-400 rounded-lg shadow-xl filter-section fixed top-0 left-0 bg-white transition-transform duration-300 ease-in-out transform ${
              isFilterVisible ? "translate-x-0" : "-translate-x-full"
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
              <div
                className="relative w-full cursor-pointer group hover:bg-gray-100"
                onClick={() => setBrandOpen((prev) => !prev)}
              >
                <div className="flex items-center justify-between px-4 space-x-5 bg-white">
                  <a className="py-1 my-2 text-base menu-hover">Brand</a>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>

                <div
                  className={`absolute z-50 flex flex-col w-full px-4 py-1 text-gray-800 bg-gray-100 shadow-xl ${
                    brandOpen ? "visible" : "invisible"
                  } group-hover:visible`}
                >
                  {Brand.map((current, idx) => (
                    <a
                      key={idx}
                      className="block w-full py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                      onClick={() => {
                        updateFilterValue("brand", current);
                        setBrandOpen(false);
                      }}
                    >
                      {current}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <hr className="text-gray-400" />

            <div className="flex justify-center w-full mx-auto font-bold text-gray-700 bg-gray-200">
              <div
                className="relative w-full cursor-pointer group"
                onClick={() => setCategoryOpen((prev) => !prev)}
              >
                <div className="flex items-center justify-between px-4 space-x-5 bg-white">
                  <a className="py-2 my-2 text-base menu-hover">Category</a>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>

                <div
                  className={`absolute z-50 flex flex-col w-full px-4 py-1 text-gray-800 capitalize bg-gray-100 shadow-xl ${
                    categoryOpen ? "visible" : "invisible"
                  } group-hover:visible`}
                >
                  {Category.map((current, idx) => (
                    <a
                      className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                      key={idx}
                      onClick={() => {
                        updateFilterValue("category", current);
                        setCategoryOpen(false);
                      }}
                    >
                      {current}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <hr className="text-gray-400" />

            <div className="size-selection">
              <div className="w-auto font-semibold">
                <div className="grid grid-cols-6 p-4 space-x-2 font-bold text-gray-700 rounded place-items-center hover:bg-gray-100 accent-teal-600">
                  {size.map((current, index) => (
                    <div className="my-1" key={index}>
                      <input
                        onClick={() => updateFilterValue("size", current)}
                        type="radio"
                        className="w-6 h-6 text-blue-600 border-gray-300 rounded"
                      />
                      <p className="font-bold text-center text-gray-700">
                        {current}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="text-gray-400" />

            <div className="flex justify-center w-full mx-auto bg-gray-200">
              <div
                className="relative w-full cursor-pointer group"
                onClick={() => setColorOpen((prev) => !prev)}
              >
                <div className="flex items-center justify-between px-4 space-x-5 bg-white">
                  <a className="py-2 my-2 text-base font-bold text-gray-700 menu-hover">
                    Color
                  </a>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>

                <div
                  className={`absolute z-50 flex flex-col w-full px-4 py-1 font-bold text-gray-700 bg-gray-100 shadow-xl ${
                    colorOpen ? "visible" : "invisible"
                  } group-hover:visible`}
                >
                  {Colors.map((current, idx) => (
                    <div className="flex my-1 text-center" key={idx}>
                      <span
                        className="px-4 py-1 h-auto w-auto rounded-full mx-2"
                        style={{ backgroundColor: current }}
                      ></span>
                      <a
                        className="block py-1 font-semibold text-gray-500 border-b border-gray-100 hover:text-black"
                        onClick={() => {
                          updateFilterValue("color", current);
                          setColorOpen(false);
                        }}
                      >
                        {current}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="text-gray-400" />

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
            {filteredProducts.map((current, index) => (
              <Product key={index} current={current} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AllProducts;
