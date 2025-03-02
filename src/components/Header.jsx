import React, { Fragment } from "react";
import { NavLink } from "react-router-dom"; // Use correct import for NavLink from react-router-dom
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

import { useCartContext } from "./context/CartContext";

const Header = () => {
  const { cartState, toggleCart } = useCartContext();
  let { cart } = cartState;

  return (
    <Fragment>
      <div className="flex justify-between items-center w-full h-20 px-4 lg:px-8">
        {/* Left Side - Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" className="font-bold text-lg uppercase">
            Home
          </NavLink>
          <NavLink to="/categories" className="font-bold text-lg uppercase">
            Categories
          </NavLink>
          <NavLink to="/about" className="font-bold text-lg uppercase">
            About
          </NavLink>
          <NavLink to="/contact" className="font-bold text-lg uppercase">
            Contact
          </NavLink>
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center items-center w-full">
          <NavLink to="/">
            <img
              className="object-contain h-16 lg:h-20"
              src="logo-removebg-preview.png"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Right Side - Search, Cart, Login */}
        <div className="flex items-center justify-end w-auto h-full pr-4 space-x-4 overflow-visible lg:flex header-right-container">
          <div className="inline-block m-3">
            <a href="/allproducts">
              <button className="grid text-3xl place-items-center">
                <IoIosSearch />
              </button>
            </a>
          </div>
          <div className="hidden m-3 lg:inline-block">
            <NavLink to="/login">
              <button className=" text-2xl font-bold text-black uppercase transition-all ease-in  rounded-xs hover:bg-indigo-300">
                <FaUser />
              </button>
            </NavLink>
          </div>

          <div className="m-3">
            <button
              className="flex items-center justify-center text-2xl"
              onClick={toggleCart} // Update to toggleCart
            >
              <HiOutlineShoppingBag />
              <span className="relative pl-2 pr-2 text-xl bg-amber-300 right-3 bottom-3 rounded-full">
                {cart.length}
              </span>
            </button>
          </div>

          <div className="m-0">
            <NavLink>
              <button className="inline-block p-2 text-2xl font-bold lg:hidden">
                <RiMenu3Fill />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
