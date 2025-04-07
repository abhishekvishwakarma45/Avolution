import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Added useNavigate
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { useCartContext } from "./context/CartContext";
import { useFilterContext } from "./context/FilterContext";
import { useState } from "react";
import useProductContext from "./context/ProductContext";
import Slidebar from "./Slidebar";
const Header = () => {
  const { cartState, toggleCart } = useCartContext();
  const { cart } = cartState;
  const { updateFilterValue } = useFilterContext();
  const navigate = useNavigate();

  const { toggleSidebar, state } = useProductContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    if (searchValue) {
      navigate(`/search?value=${searchValue}`);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-between items-center w-full h-20 px-4 lg:px-8">
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" className="font-bold text-lg uppercase">
            Home
          </NavLink>
          <NavLink to="/allproducts" className="font-bold text-lg uppercase">
            Products
          </NavLink>
          <NavLink to="/about" className="font-bold text-lg uppercase">
            About
          </NavLink>
          <NavLink to="/contact" className="font-bold text-lg uppercase">
            Contact
          </NavLink>
        </div>

        <div className="flex justify-left items-center w-full lg:justify-center">
          <NavLink to="/">
            <img
              className="object-contain h-16 lg:h-20"
              src="https://res.cloudinary.com/dqktbs8zx/image/upload/v1744024894/logo-removebg-preview_ctd0jf.png"
              alt="Logo"
            />
          </NavLink>
        </div>

        <div className="flex items-center justify-end w-auto h-full pr-4 space-x-4 overflow-visible lg:flex header-right-container">
          <form
            onSubmit={handleSearch}
            className=" items-center hidden justify-center w-full py-4 rounded-xs lg:flex "
          >
            <div className="border flex items-center justify-center">
              <input
                type="text"
                name="search"
                className="w-auto h-auto px-3 py-2 outline-none text-gray-700 "
                placeholder="Search anything..."
              />
              <button type="submit" className="px-4 py-2 text-2xl">
                <IoIosSearch />
              </button>
            </div>
          </form>

          <div className="hidden m-3 lg:inline-block">
            <NavLink to="/login">
              <button className="text-2xl font-bold text-black uppercase transition-all ease-in rounded-xs">
                <FaUser />
              </button>
            </NavLink>
          </div>

          <div className="m-3">
            <button
              className="flex items-center justify-center text-2xl"
              onClick={toggleCart}
            >
              <HiOutlineShoppingBag />
              <span className="relative pl-2 pr-2 text-xl bg-amber-300 right-3 bottom-3 rounded-full">
                {cart.length}
              </span>
            </button>
          </div>

          <div className="m-0">
            <NavLink>
              <button
                onClick={() => toggleSidebar(true)}
                className="inline-block p-2 text-2xl font-bold lg:hidden"
              >
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
