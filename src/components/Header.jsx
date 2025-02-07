import React, { Fragment } from "react";
import { NavLink } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
const Header = () => {
  return (
    <Fragment>
      <div className="grid w-full h-20 grid-cols-2 lg:grid-cols-3">
        <div className="items-center justify-start flex-auto hidden w-auto h-full pl-2 pr-2 lg:flex">
          <ul className="flex items-center justify-center w-auto h-auto font-bold text-center uppercase flexwrap">
            <NavLink>
              <li className="m-2">Men</li>
            </NavLink>
            <NavLink>
              <li className="m-2">Women</li>
            </NavLink>
            <NavLink>
              <li className="m-2">T-Shirts</li>
            </NavLink>
            <NavLink>
              <li className="m-2">About</li>
            </NavLink>
            <NavLink>
              <li className="m-2">Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="grid w-full h-20 text-4xl place-items-left lg:place-items-center logo-container">
          <NavLink>
            <img
              className="object-contain w-auto h-20 mix-blend-multiply"
              src="champion-shirt-logo.png"
              alt=""
            />
          </NavLink>
        </div>

        <div className="flex items-center justify-end w-auto h-full pr-4 lg:flex header-right-container">
          {/* <div className="hidden m-4 lg:flex">
            <input
              type="text"
              placeholder="Search anything"
              className="p-2 pl-5 ml-4 border-r-0 lg:w-auto border-1"
            />
            <button className="pl-4 pr-4 mr-4 text-4xl bg-indigo-300 border-l-0 border-1">
              <IoIosSearch />
            </button>
          </div> */}
          <div>
            <buttn className="flex items-center justify-center text-2xl ">
              <HiOutlineShoppingBag />
              <span className="relative pl-2 pr-2 text-xl bg-red-400 right-3 bottom-3 rounded-4xl">
                0
              </span>
            </buttn>
          </div>

          <div>
            <NavLink>
              <button className="hidden pt-2 pb-2 pl-8 pr-8 font-bold text-white uppercase bg-indigo-500 lg:flex rounded-xs">
                Login
              </button>
            </NavLink>
          </div>

          <div>
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

// relative top-4 right- text-xl z-10
