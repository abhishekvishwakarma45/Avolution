import React from "react";
import useProductContext from "./context/ProductContext";
import { RxCross2 } from "react-icons/rx";
import { HiHome } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineInbox } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { NavLink } from "react-router-dom"; // Corrected import
import { useCartContext } from "./context/CartContext";
const Slidebar = () => {
  const { state, toggleSidebar } = useProductContext();
  const { isSidebarOpen } = state;
  const { toggleCart } = useCartContext();

  return (
    <div>
      <div
        className={`fixed inset-0 bg-gray-500/75 transition-opacity ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden="true"
        onClick={() => toggleSidebar(false)}
      ></div>

      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
          <div className="p-4 mb-2 flex justify-between items-center h-14">
            <div className="h-14 w-[15vh] flex justify-between items-center">
              <img
                className="object-contain max-h-full max-w-full"
                src="https://res.cloudinary.com/dqktbs8zx/image/upload/v1744024894/logo-removebg-preview_ctd0jf.png"
                alt="Logo"
              />
            </div>

            <button
              className="text-2xl h-auto w-auto"
              onClick={() => toggleSidebar(false)}
            >
              <RxCross2 />
            </button>
          </div>
          <hr />
          <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <NavLink to="/" onClick={() => toggleSidebar(false)}>
              <div
                role="button"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <BiHomeSmile />
                <div className="grid mr-4 place-items-center"></div>
                Home
              </div>
            </NavLink>

            <NavLink to="/allproducts" onClick={() => toggleSidebar(false)}>
              <div
                role="button"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <AiOutlineInbox />
                <div className="grid mr-4 place-items-center"></div>
                Products
              </div>
            </NavLink>
            <NavLink
              to="/"
              onClick={() => {
                toggleSidebar(false), toggleCart();
              }}
            >
              <div
                role="button"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <HiOutlineShoppingBag />
                <div className="grid mr-4 place-items-center"></div>
                Cart
              </div>
            </NavLink>
            <NavLink to="/about" onClick={() => toggleSidebar(false)}>
              <div
                role="button"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <IoInformationCircleOutline />
                <div className="grid mr-4 place-items-center"></div>
                About Us
              </div>
            </NavLink>
            <NavLink to="/contact" onClick={() => toggleSidebar(false)}>
              <div
                role="button"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <HiMiniUserGroup />
                <div className="grid mr-4 place-items-center"></div>
                Contact Us
              </div>
            </NavLink>
          </nav>

          <div className="mt-auto border-t-1 p-2 text-center text-sm text-gray-500">
            <p>
              &#169; {new Date().getFullYear()} Developed by <br /> Abhishek
              Vishwakarma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
