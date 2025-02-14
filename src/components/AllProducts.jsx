import React, { Fragment } from "react";
import { MdFilterList } from "react-icons/md";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import Product from "./Product";

import { TbSort09 } from "react-icons/tb";
import { TbSort90 } from "react-icons/tb";

const AllProducts = () => {
  const [brand, setBrand] = useState();
  console.log(brand);
  return (
    <Fragment>
      <div
        className=" h-auto w-screen my-6 grid gap-4 px-25"
        style={{ gridTemplateColumns: "30% 60%" }}
      >
        <div className="filter-section shadow-xl h-auto w-full p-2">
          <div className="p-2 my-2 capitalize">
            <p className="flex justify-between text-xl text-gray-700 font-bold items-center">
              filter
              <span className="text-2xl">
                <MdFilterList />
              </span>
            </p>
          </div>
          <hr />

          <div className="mx-auto flex w-full justify-center  text-gray-700 font-bold bg-gray-200 ">
            <div className="group relative w-full cursor-pointer hover:bg-gray-100 ">
              <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a className="menu-hover my-2 py-1 text-base ">Brand</a>
                <span>
                  <FaAngleDown />
                </span>
              </div>

              <div
                onClick={() => setBrand("sunday")}
                className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
              >
                <a className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                  Puma
                </a>
                <a className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                  Gucci
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="mx-auto flex text-gray-700 font-bold w-full justify-center bg-gray-200">
            <div className="group relative w-full cursor-pointer">
              <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a className="menu-hover my-2 py-2 text-base ">Category</a>
                <span>
                  <FaAngleDown />
                </span>
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                  Men
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="size-selection">
            <div className="w-auto  font-semibold">
              <div className="flex items-center text-gray-700 font-bold space-x-2 rounded p-4 hover:bg-gray-100 accent-teal-600">
                <input
                  type="checkbox"
                  id="htmlCheckbox"
                  name="languageCheckbox"
                  className="h-6 w-6 rounded border-gray-300 text-teal-600 shadow-sm  focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
                <p className="mx-2 text-gray-700 font-bold"> Size</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="mx-auto flex w-full justify-center bg-gray-200">
            <div className="group relative w-full  cursor-pointer">
              <div className="flex items-center justify-between space-x-5 bg-white px-4 ">
                <a className="menu-hover my-2 text-gray-700 font-bold py-2 text-base ">
                  Color
                </a>
                <span>
                  <FaAngleDown />
                </span>
              </div>

              <div
                onClick={() => setBrand("sunday")}
                className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-700 font-bold shadow-xl group-hover:visible"
              >
                <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                  Red
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="Price-range">
            <div className="bg-white  p-2 w-full max-w-md">
              <div className="mb-4">
                <label
                  name="price-range"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price Range
                </label>
                <input
                  type="range"
                  id="price-range"
                  className="w-full accent-indigo-600"
                  min="0"
                  max="1000"
                  value="500"
                />
              </div>
              <div className="flex justify-between text-gray-500">
                <span id="minPrice">$0</span>
                <span id="maxPrice">$1000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="AllProducts h-auto w-auto">
          <div className="searchbar flex justify-between shadow-lg w-full h-auto rounded-xs">
            <div className="flex justify-center rounded-xs w-full items-center px-4 py-4 ">
              <input
                type="text"
                className="border w-full h-auto px-3 py-2 text-gray-700 font-bold border-gray-500 border-r-0 "
                placeholder="Search anything..."
              />
              <button className="px-8 py-2 border border-grey-500 text-2xl">
                <IoIosSearch />
              </button>
            </div>
            <div>
              <div className="mx-auto flex w-full justify-center ">
                <div className="group relative w-full cursor-pointer  py-2">
                  <div className="flex items-center justify-between space-x-5 bg-white px-4">
                    <a className="menu-hover my-2 mx-6 py-2 text-base font-medium text-black text-nowrap">
                      Sort By
                    </a>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>

                  <div
                    onClick={() => setBrand("sunday")}
                    className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                  >
                    <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                      <p className="flex justify-between items-center">
                        A-Z
                        <span>
                          <FaSortAlphaUp />
                        </span>
                      </p>
                    </a>
                    <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                      <p className="flex justify-between items-center">
                        Z-A
                        <span>
                          <FaSortAlphaDownAlt />
                        </span>
                      </p>
                    </a>
                    <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                      <p className="flex justify-between items-center">
                        1-9
                        <span>
                          <TbSort09 />
                        </span>
                      </p>
                    </a>
                    <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                      <p className="flex justify-between items-center">
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

          <div className="allProduct-conatiner p-4 grid grid-cols-3 gap-2">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              esse voluptatem sit, unde dignissimos nisi inventore quae autem
              nostrum, hic officia! Error doloremque culpa dignissimos soluta
              quos architecto natus vitae?
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              esse voluptatem sit, unde dignissimos nisi inventore quae autem
              nostrum, hic officia! Error doloremque culpa dignissimos soluta
              quos architecto natus vitae?
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              esse voluptatem sit, unde dignissimos nisi inventore quae autem
              nostrum, hic officia! Error doloremque culpa dignissimos soluta
              quos architecto natus vitae?
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AllProducts;

// block text-gray-700 font-bold mb-2
