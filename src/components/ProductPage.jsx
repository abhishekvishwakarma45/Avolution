import React from "react";
import { Fragment } from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";

const ProductPage = () => {
  return (
    <Fragment>
      <div className="grid w-screen h-auto grid-cols-2 px-40 py-4">
        <div className="w-auto h-auto p-5">
          <img
            src="mohamad-khosravi-yMpZJvTEspk-unsplash.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        {/* -------------------------description sec */}
        <div className="p-5 capitalize ">
          <p className="my-2 text-xs uppercase">category</p>
          <h1 className=" text-2xl font-bold my-1.5">name</h1>
          <p className="my-1 font-extrabold">price</p>
          <span className="my-1 ">& shipping charges</span>
          <p className="my-1 ">desc</p>
          <div className="color-container">
            <button className="p-4 my-2 mr-2 text-xs text-white uppercase bg-black rounded-xs"></button>
          </div>

          <div className="size-container">
            <button className="p-3 my-2 mr-2 text-xs text-white uppercase bg-black rounded-xs">
              size
            </button>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-items-start">
            <button className="p-3 mx-2 my-2 text-white uppercase bg-black rounded-xs">
              <LuPlus />
            </button>
            <p className="mx-2">0</p>
            <button className="p-3 mx-2 my-2 text-white uppercase bg-black rounded-xs">
              <AiOutlineMinus />
            </button>
            <button className="p-3 mx-4 text-xs uppercase bg-amber-100 rounded-xs">
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
            <ul className="flex flex-col justify-center font-bold">
              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1">100% cotton</p>
              </li>

              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1"> Light-Weight</p>
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
