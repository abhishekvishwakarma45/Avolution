import { useContext, useEffect, useReducer, createContext } from "react";
import React from "react";
import { CartReducer as reducer } from "../reducer/CartReducer"; // ensure correct import

function getProductFromLs() {
  const cartProduct = localStorage.getItem("cartProduct");
  return cartProduct ? JSON.parse(cartProduct) : [];
}

function getTotalPriceFromLs() {
  const totalPrice = localStorage.getItem("totalprice");
  return totalPrice ? parseFloat(totalPrice) : 0;
}

const CartContext = createContext();
const cartInitialState = {
  cart: getProductFromLs(),
  showcart: "",
  totalitems: 0,
  totalprice: getTotalPriceFromLs(),
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
    const product = {
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

  useEffect(() => {
    if (cartState.cart.length > 0) {
      localStorage.removeItem("totalprice");
      localStorage.setItem("totalprice", cartState.totalprice.toString());
    }
  }, [cartState.cart, cartState.totalprice]);

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
