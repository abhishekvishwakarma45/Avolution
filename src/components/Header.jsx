import React, { Fragment } from "react";
import { NavLink } from "react-router-dom"; // Use correct import for NavLink from react-router-dom
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

import { useCartContext } from "./context/CartContext";

const Header = () => {
  const { cartState, toggleCart } = useCartContext();
  let { cart } = cartState;

  return (
    <Fragment>
      <div className="grid w-screen h-20 grid-cols-2 pt-1 pb-1 pl-2 pr-2 header-container lg:grid-cols-3">
        <div className="items-center justify-start flex-auto hidden w-auto h-full lg:flex">
          <ul className="flex items-center justify-center w-auto h-auto pl-4 font-bold text-center uppercase flexwrap">
            <a href="/">
              <li className="m-2">Home</li>
            </a>
            <a href="/">
              <li className="m-2">Categories</li>
            </a>
            <a href="">
              <li className="m-2">About</li>
            </a>
            <a href="">
              <li className="m-2">Contact</li>
            </a>
          </ul>
        </div>

        <div className="grid w-auto h-20 text-4xl place-items-left lg:place-items-center logo-container">
          <NavLink to="/">
            <img
              className="object-contain w-auto h-20 mix-blend-multiply"
              src="logo-removebg-preview.png"
              alt="Logo"
            />
          </NavLink>
        </div>

        <div className="flex items-center justify-end w-auto h-full pr-4 space-x-4 overflow-visible lg:flex header-right-container">
          <div className="inline-block m-3">
            <a href="/allproducts">
              <button className="grid text-3xl place-items-center">
                <IoIosSearch />
              </button>
            </a>
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

          <div className="hidden m-3 lg:inline-block">
            <NavLink to="/login">
              <button className="flex pt-2 pb-2 pl-8 pr-8 font-bold text-white uppercase transition-all ease-in bg-black rounded-xs hover:bg-indigo-300">
                Login
              </button>
            </NavLink>
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
