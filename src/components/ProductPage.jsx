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

const ProductPage = () => {
  const { getProductById, state } = useProductContext();
  const { singleProduct } = state;

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id]);

  console.log(singleProduct);
  const {
    name,
    brand,
    price,
    description,
    stock,
    category,
    image,
    color,
    size,
  } = singleProduct;

  const [selectedColor, setSelectedColor] = useState(false);
  const [selectedSize, setSelectedSize] = useState(false);
  const [active, setActive] = useState(false);
  const [quantity, setQuantity] = useState(0);
  gsap.registerPlugin(ScrollTrigger);
  let current;
  const ImageRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.to(ImageRef.current, {
        scrollTrigger: {
          trigger: ImageRef.current,
          pin: true,
          pinSpacing: false,
          scrub: 2,

          start: "top top",
          end: "+=100%",
        },
      });
    }
    return () => {
      if (ScrollTrigger.getAll()) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="grid w-screen h-auto grid-cols-1 px-4 md:px-8 lg:grid-cols-2 lg:px-40 py-5">
        <div ref={ImageRef} className="w-auto h-auto p-5">
          <img src={image} alt="" className="object-cover w-full h-auto" />
        </div>

        <div className=" description-container capitalize sm: py-2 px-4 lg:py-5">
          <p className="my-2 text-xs uppercase">{category}</p>
          <h1 className="text-2xl font-bold my-1.5">{name}</h1>
          <p className="my-1 font-extrabold">
            {price} <span className="my-1 text-xs ">& shipping charges</span>
          </p>

          <p className="my-1 ">{description}</p>
          <div className="color-container">
            {Array.isArray(color)
              ? color.map((current, index) => {
                  return (
                    <button
                      key={index}
                      className="h-8 w-8 my-2 mr-2 text-3xl  text-amber-300  uppercase bg-black rounded-xs"
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
            {Array.isArray(size)
              ? size.map((current, index) => {
                  return (
                    <button
                      key={index}
                      className={`h-8 w-8 my-2 mr-2  text-white uppercase bg-black rounded-xs ${
                        active ? "bg-amber-300" : "bg-black"
                      }`}
                      onClick={() => {
                        setActive(true);
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
            <button className="p-3 mx-4 text-xs uppercase bg-amber-300 rounded-xs">
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
