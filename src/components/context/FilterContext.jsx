import { createContext, useContext, useEffect, useReducer } from "react";
import React from "react";
import { FilterReducer as reducer } from "../reducer/FilterReducer";
const filterContext = createContext();
import useProductContext from "./ProductContext";

const initialState = {
  sortValue: "",
  filteredProducts: [],
  filterValue: "",
  filter: {
    searchvalue: "",
    category: "",
    brand: "",
    size: "",
    color: "",
    price: 0,
  },
};

export default function FilterContextProvider({ children }) {
  const [FilterState, dispatch] = useReducer(reducer, initialState);
  const { state } = useProductContext();
  const { allProducts } = state;

  const getSortValue = (value) => {
    dispatch({ type: "SET_SORT_VALUE", payload: value });
  };

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      dispatch({ type: "SORT_PRODUCTS", payload: allProducts });
    }
  }, [allProducts]);

  useEffect(() => {
    if (FilterState.sortValue && allProducts.length > 0) {
      dispatch({ type: "SORT_PRODUCTS", payload: allProducts });
    }
  }, [FilterState.sortValue, allProducts]);

  function updateFilterValue(name, value) {
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  }

  function ClearFilter() {
    dispatch({ type: "CLEAR_FILTER" });
  }

  useEffect(() => {
    if (FilterState.filter && allProducts.length > 0) {
      dispatch({ type: "FILTER_PRODUCTS", payload: allProducts });
    }
  }, [FilterState.filter, allProducts]);
  return (
    <filterContext.Provider
      value={{ FilterState, getSortValue, updateFilterValue, ClearFilter }}
    >
      {children}
    </filterContext.Provider>
  );
}

export const useFilterContext = () => {
  return useContext(filterContext);
};
