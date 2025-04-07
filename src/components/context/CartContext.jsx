import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import React from "react";
import { CartReducer as reducer } from "../reducer/CartReducer";

function getProductFromLs() {
  let cartProduct = localStorage.getItem("cartProduct");
  if (!cartProduct) {
    return [];
  } else {
    return JSON.parse(cartProduct);
  }
}

const CartContext = createContext();
const cartInitialState = {
  cart: getProductFromLs(),
  showcart: "",
  totalitems: 0,
  totalprice: 0,
};

export default function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(reducer, cartInitialState);

  const addToCart = (
    id,
    selectedColor,
    quantity,
    selectedSize,
    price,
    singleProduct
  ) => {
    let product = {
      id,
      selectedColor,
      quantity,
      selectedSize,
      price,
      singleProduct,
    };
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const RemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider
      value={{ cartState, addToCart, toggleCart, RemoveItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
