import React, { Fragment } from "react";
import { MdFilterList } from "react-icons/md";
import { useState } from "react";

const AllProducts = () => {
  return (
    <Fragment>
      <div
        className="bg-[#F3F4F6] h-auto w-screen grid gap-4 px-40"
        style={{ gridTemplateColumns: "30% 60%" }}
      >
        <div className="filter-section h-auto w-full p-2">
          <div className="p-2 my-2 capitalize">
            <p className="flex justify-between text-xl items-center">
              filter
              <span>
                <MdFilterList />
              </span>
            </p>
          </div>
          <hr />

          <div className="mx-auto flex w-full justify-center bg-gray-200">
            <div className="group relative w-full cursor-pointer py-2">
              <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a className="menu-hover my-2 py-2 text-base font-medium text-black">
                  Brand
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                  Sunday
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full justify-center bg-gray-200">
            <div className="group relative w-full cursor-pointer py-2">
              <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a className="menu-hover my-2 py-2 text-base font-medium text-black">
                  Category
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black">
                  Sunday
                </a>
              </div>
            </div>
          </div>

          <div className="Price-range">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
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
          <div className="size-selection">
            <div className="w-40 text-xl font-semibold">
              <div className="flex items-center  space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
                <input
                  type="checkbox"
                  id="htmlCheckbox"
                  name="languageCheckbox"
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm  focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
                <p className="mx-2"> Size</p>
              </div>
            </div>
          </div>
        </div>

        <div className="AllProducts">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima
          quaerat perspiciatis, officia omnis eaque, sed exercitationem
          deserunt, alias inventore voluptates labore? Aperiam modi veritatis
          consequatur minima architecto distinctio quae? Modi rerum excepturi
          consequatur sunt doloremque esse eligendi neque amet, impedit,
          consequuntur possimus ducimus repellat praesentium in aut tenetur
          porro itaque eum deserunt vitae iste optio quibusdam harum eaque.
          Facere debitis sunt neque eius rerum, eos quidem tempore, placeat vel
          fugit excepturi quaerat officiis at omnis voluptatem optio animi ab
          eum ex earum fuga amet modi distinctio. Cumque aspernatur molestiae
          possimus reiciendis totam dolorem libero, cum distinctio eveniet
          architecto a soluta provident aliquid minima rem eligendi impedit,
          excepturi incidunt tempore beatae officiis voluptatibus? Quidem, alias
          aspernatur sed tempora temporibus ad nesciunt esse iusto molestiae
          autem delectus sunt atque consequuntur rerum voluptas? Repellat
          laudantium rerum maiores cumque, ipsum repudiandae quia
          consecteturriatur repudiandae? Repudiandae dolorum nostrum nemo
          consectetur obcaecati maxime, accusantium porro quas voluptatem
          necessitatibus veritatis sed sunt maiores dolorem possimus non ullam
          id? Sed nam commodi quis tempora recusandae exercitationem at? Esse
          vero corporis quo recusandae a culpa neque asperiores nam voluptatum.
          Repudiandae, possimus?
        </div>
      </div>
    </Fragment>
  );
};

export default AllProducts;
