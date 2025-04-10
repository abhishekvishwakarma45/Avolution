import React, { Fragment } from "react";
import { useCartContext } from "./context/CartContext";
import FormatPrice from "./FormatPrice";

import { NavLink } from "react-router";

const Cart = () => {
  const { cartState, toggleCart, RemoveItem } = useCartContext();
  const { cart, showcart, totalprice } = cartState;

  return (
    <Fragment>
      <div
        className={`fixed inset-0 z-30 transition-transform duration-300 ${
          showcart ? "translate-x-0" : "translate-x-full"
        }`}
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium uppercase text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping Cart
                      </h2>
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={toggleCart}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-8 ">
                      {cart.length === 0 ? (
                        <div className="cart-empty-container text-center py-5 px-10 ">
                          <div className="cart-empty-message ">
                            <h2 className="text-xl font-bold">
                              Your cart is currently empty
                            </h2>
                            <p className="text-base text-gray-600 mt-2">
                              Before proceeding to checkout, you must add some
                              products to your shopping cart.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {Array.isArray(cart)
                              ? cart.map((curr, idx) => (
                                  <NavLink
                                    key={idx}
                                    href={`/product/${curr.id.slice(0, 1)}`}
                                  >
                                    <li className="flex py-6">
                                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={curr.image[0]}
                                          alt={curr.name}
                                          className="size-full object-cover"
                                        />
                                      </div>
                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{curr.name}</a>
                                          </h3>
                                          <FormatPrice price={curr.price} />
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          <span>
                                            Color:
                                            <span
                                              className="px-3 py-0.5 mx-1 rounded-full"
                                              style={{
                                                backgroundColor:
                                                  curr.selectedColor,
                                              }}
                                            ></span>
                                          </span>
                                          <br />
                                          <span>Size:{curr.selectedSize}</span>
                                        </p>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p className="text-gray-500">
                                            Quantity: {curr.quantity}
                                          </p>
                                          <button
                                            onClick={() => RemoveItem(curr.id)}
                                            type="button"
                                            className="font-medium text-red-600 hover:text-gray-600"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                  </NavLink>
                                ))
                              : []}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <FormatPrice price={totalprice} />
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes will be applied during checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-amber-300 px-6 py-3 text-base font-medium text-black shadow-xs hover:bg-amber-200  transition ease-in"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or <br />
                        <NavLink to="/allproducts">
                          <button
                            type="button"
                            className="font-medium mt-4 text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping &rarr;
                          </button>
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
