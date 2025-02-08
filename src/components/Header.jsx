import React, { Fragment } from "react";
import { NavLink } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
const Header = () => {
  return (
    <Fragment>
      <div className="grid w-full h-20 grid-cols-2 pt-1 pr-2 pb-1 pl-2  absolute  top-0 z-999 lg:grid-cols-3 ">
        <div className="items-center justify-start flex-auto hidden w-auto h-full lg:flex">
          <ul className="pl-4 flex items-center justify-center w-auto h-auto font-bold text-center uppercase flexwrap">
            <NavLink>
              <li className="m-2">Home</li>
            </NavLink>
            <NavLink>
              <li className="m-2">Categories</li>
            </NavLink>

            <NavLink>
              <li className="m-2">About</li>
            </NavLink>
            <NavLink>
              <li className="m-2">Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="grid w-[30vw] h-20 text-4xl place-items-left lg:place-items-center logo-container">
          <NavLink>
            <img
              className="object-contain w-auto h-20 mix-blend-multiply"
              src="logo-removebg-preview.png"
              alt=""
            />
          </NavLink>
        </div>

        <div className="flex items-center justify-end w-auto h-full pr-4 overflow-visible lg:flex header-right-container space-x-4">
          <div className="m-3 inline-block">
            <button className="text-3xl grid place-items-center">
              <IoIosSearch />
            </button>
          </div>
          <div className="m-3">
            <button className="flex items-center justify-center text-2xl">
              <HiOutlineShoppingBag />
              <span className="relative pl-2 pr-2 text-xl bg-red-400 right-3 bottom-3 rounded-4xl">
                0
              </span>
            </button>
          </div>
          <div className="m-3 hidden lg:inline-block">
            <NavLink>
              <button className="pt-2 pb-2 pl-8 pr-8 font-bold text-white uppercase bg-indigo-500 flex rounded-xs transition-all ease-in hover:bg-indigo-300">
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
