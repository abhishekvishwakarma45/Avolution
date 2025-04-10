import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { useCartContext } from "./context/CartContext";
import { useFilterContext } from "./context/FilterContext";
import useProductContext from "./context/ProductContext";
import Slidebar from "./Slidebar";

const Header = () => {
  const navigate = useNavigate();
  const { cartState, toggleCart } = useCartContext();
  const { cart } = cartState;
  const { updateFilterValue } = useFilterContext();
  const { toggleSidebar } = useProductContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    if (searchValue) {
      navigate(`/allproducts?value=${searchValue}`);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-between items-center w-full h-20 px-4 lg:px-8">
        <div className="hidden lg:flex items-center space-x-6 w-1/3">
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

        <div className="flex justify-center items-center w-1/3">
          <NavLink to="/">
            <img
              className="object-contain h-16 lg:h-20"
              src="https://res.cloudinary.com/dqktbs8zx/image/upload/v1744024894/logo-removebg-preview_ctd0jf.png"
              alt="Logo"
            />
          </NavLink>
        </div>

        <div className="flex items-center justify-end w-1/3 pr-2 space-x-4">
          <form onSubmit={handleSearch} className="items-center hidden lg:flex">
            <div className="border flex items-center rounded-sm overflow-hidden">
              <input
                type="text"
                name="search"
                className="px-3 py-2 outline-none text-gray-700"
                placeholder="Search anything..."
              />
              <button type="submit" className="px-4 py-2 text-2xl">
                <IoIosSearch />
              </button>
            </div>
          </form>

          <NavLink to="/" className="hidden lg:grid place-content-center">
            <button className="text-2xl mx-1 font-bold text-black">
              <FaUser />
            </button>
          </NavLink>

          <button className="relative text-2xl" onClick={toggleCart}>
            <HiOutlineShoppingBag />
            <span className="absolute -top-2 -right-2 bg-amber-300 text-black text-xs px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          </button>

          <button
            onClick={() => toggleSidebar(true)}
            className="inline-block p-2 text-2xl font-bold lg:hidden"
          >
            <RiMenu3Fill />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
