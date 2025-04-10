import { Fragment } from "react";

import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Contact() {
  return (
    <Fragment>
      <div className="w-full px-4 md:px-10 lg:px-20  py-10 mx-auto max-w-7xl">
        <p className="text-sm uppercase font-extrabold text-indigo-400 flex items-center mb-6">
          <NavLink to="/" className="hover:text-black transition">
            Home
          </NavLink>
          <IoIosArrowForward className="mx-1 text-black" />
          <span className="text-black">Contact Us</span>
        </p>
        <hr className="text-gray-500 my-4" />

        <div className="grid grid-cols-1 shadow-xl p-4 lg:grid-cols-2 gap-8 items-start">
          <div className="hidden md:block">
            <img
              src="https://i.pinimg.com/originals/5e/9c/97/5e9c9768968baa7042535d8a8f58f027.jpg"
              alt="Contact Illustration"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="space-y-2">
            <form className="bg-white rounded-xl p-4 space-y-5">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Get In Touch
                </h2>
                <p className="text-gray-500 mt-2">
                  We’d love to hear from you!
                </p>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-300 uppercase font-bold text-black py-3 rounded-md  hover:bg-amber-200 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
