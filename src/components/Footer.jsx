import { Fragment } from "react";
import React from "react";
import { MdCall } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { NavLink } from "react-router";
export const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container mt-5 w-full bg-black text-white py-8 sm:py-12 md:py-16 px-6 sm:px-12 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-left p-4">
            <p className="font-semibold text-xl capitalize mb-4">Avora</p>
            <p className="text-sm capitalize leading-relaxed">
              where fashion meets individuality.
            </p>
          </div>

          <div className="text-left  sm:text-left p-4">
            <p className="font-semibold text-xl capitalize mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <NavLink to="/">
                  <a href="#" className="text-sm hover:text-amber-300 ">
                    Home
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <a href="#" className="text-sm hover:text-amber-300 ">
                    About Us
                  </a>
                </NavLink>
              </li>

              <li>
                <NavLink to="contact">
                  <a href="#" className="text-sm hover:text-amber-300 ">
                    Support
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/allproducts">
                  <a href="#" className="text-sm hover:text-amber-300 ">
                    Products
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="text-left  p-4">
            <p className="font-semibold text-xl capitalize mb-4">
              Get in Touch
            </p>
            <p className="flex justify-start items-center space-x-2 text-sm mb-2">
              <MdCall className="text-lg" /> <a href="">(+91) 7385097588</a>
            </p>
            <p className="flex justify-start items-center space-x-2 text-sm">
              <MdMailOutline className="text-lg" />{" "}
              <a href="">abhishekv0045@gmail.com</a>
            </p>
          </div>

          <div className="text-left p-4">
            <p className="font-semibold text-xl capitalize mb-4">
              Subscribe to Get More Updates
            </p>
            <div className="flex flex-col sm:flex-row items-start lg:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-full sm:w-auto p-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-xs"
              />
            </div>
            <button className="bg-amber-300 text-black p-3 my-1 font-bold rounded-xs hover:bg-amber-400 uppercase text-sm">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-white pt-6">
          <div className="flex justify-center space-x-6 mb-4">
            <button className="text-3xl text-white hover:text-amber-300">
              <FaGoogle />
            </button>
            <button className="text-4xl text-white hover:text-amber-300">
              <IoLogoInstagram />
            </button>
            <button className="text-3xl text-white hover:text-amber-300">
              <FaFacebook />
            </button>
            <button className="text-3xl text-white hover:text-amber-300">
              <FaXTwitter />
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AVolution. All Rights Reserved.
          </div>
        </div>
      </div>
    </Fragment>
  );
};
