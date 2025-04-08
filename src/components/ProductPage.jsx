import React, { useRef, useState, useEffect } from "react";
import { Fragment } from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router";
import useProductContext from "./context/ProductContext";
import FormatPrice from "./FormatPrice";
import { useCartContext } from "./context/CartContext";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ProductPage = () => {
  const { getProductById, state } = useProductContext();
  const { isLoading, singleProduct } = state;

  const { cartState, addToCart } = useCartContext();

  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const {
    name,
    brand,
    price,
    image,
    description,
    stock,
    category,
    color,
    size,
  } = singleProduct || {};

  const [selectedColor, setSelectedColor] = useState(false);
  const [selectedSize, setSelectedSize] = useState(false);
  const [quantity, setQuantity] = useState(1);

  gsap.registerPlugin(ScrollTrigger);

  const ImageRef = useRef(null);

  return (
    <Fragment>
      <p className="text-sm uppercase font-extrabold text-indigo-400 flex justify-center items-center mx-4 my-4">
        <NavLink to="/">
          <span className="transition ease-in  hover:text-black ">Home</span>
        </NavLink>
        <span className="text-black mx-1">
          <IoIosArrowForward />
        </span>
        <NavLink to="/allproducts">
          <span className="transition ease-in  hover:text-black ">
            products
          </span>
        </NavLink>
        <span className="text-black mx-1">
          <IoIosArrowForward />
        </span>
        <NavLink to={`/product/${id}`}>
          <span className="transition ease-in  hover:text-black ">{id}</span>
        </NavLink>
      </p>
      <div className="grid w-screen h-auto grid-cols-1 px-4 py-2 md:px-8 lg:grid-cols-2 lg:px-40">
        <div ref={ImageRef} className="w-auto h-auto p-2">
          {image && image.length > 0 ? (
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {image.map((curr, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={curr}
                    alt={name || "Product Image"}
                    className="object-cover w-full h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">No image available</p>
          )}
        </div>

        <div className="px-4 py-2 capitalize description-container sm: lg:py-5">
          <p className="my-2 text-xs uppercase">{brand}</p>
          <h1 className="text-2xl font-bold my-1.5">{name}</h1>
          <p className="my-2 text-xs uppercase">{category}</p>
          <p className="my-1 font-extrabold">
            <FormatPrice price={price} />
            <span className="mx-1 text-xs ">& shipping charges</span>
          </p>

          <p className="my-1 ">{description}</p>
          <div className="color-container">
            <span className="my-1 font-bold text-xs ">color:</span>
            <br />
            {Array.isArray(color)
              ? color.map((current, index) => {
                  return (
                    <button
                      key={index}
                      className="w-8 h-8 my-2 mr-2 text-3xl text-black uppercase bg-black border border-gray-400 rounded-xs"
                      style={{ backgroundColor: current }}
                      onClick={() => setSelectedColor(current)}
                    >
                      {selectedColor === current ? <IoMdCheckmark /> : ""}
                    </button>
                  );
                })
              : []}
          </div>

          <div className="size-container">
            <span className="my-1 font-bold text-xs ">size:</span>
            <br />
            {Array.isArray(size)
              ? size.map((current, index) => {
                  return (
                    <button
                      key={index}
                      className={`h-8 w-8 my-2 mr-2 rounded-xs uppercase ${
                        selectedSize === current
                          ? "text-white bg-black "
                          : "border border-grey-300"
                      }`}
                      onClick={() => {
                        setSelectedSize(current);
                      }}
                    >
                      {current}
                    </button>
                  );
                })
              : []}
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-items-start">
            <button
              className="p-3 mx-2 my-2 text-white uppercase bg-black rounded-xs"
              onClick={() =>
                setQuantity(quantity < stock ? quantity + 1 : stock)
              }
            >
              <LuPlus />
            </button>
            <p className="mx-2">{quantity}</p>
            <button
              className="p-3 mx-2 my-2 text-white uppercase bg-black rounded-xs"
              onClick={() =>
                setQuantity(quantity > 1 ? quantity - 1 : quantity)
              }
            >
              <AiOutlineMinus />
            </button>
            <button
              className="p-3 mx-4 text-xs uppercase bg-amber-300 rounded-xs"
              onClick={() =>
                addToCart(
                  id,
                  selectedColor,
                  quantity,
                  selectedSize,
                  price,
                  singleProduct
                )
              }
            >
              add to cart
            </button>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <h1 className="font-bold capitalize">Description</h1>
            <hr className="my-4" />
            <p className="my-4">
              Our clothing is crafted from 100% natural materials, ensuring
              comfort and eco-friendliness. Each piece is lightweight,
              breathable, and dyed with environmentally friendly methods. Dress
              with confidence and a clear conscience with our Brand.
            </p>

            <ul className="flex flex-col justify-center">
              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1">100% cotton</p>
              </li>

              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1">Light-Weight</p>
              </li>

              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1">Eco-Friendly Dye</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
