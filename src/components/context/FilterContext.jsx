import { createContext, useContext, useReducer } from "react";
import React from "react";
import { FilterReducer as reducer } from "../reducer/FilterReducer";
const filterContext = createContext();

const initialState = {
  sortValue: "",
};

export default function FilterContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSortValue = (value) => {
    dispatch({ type: "SET_SORT_VALUE", payload: value });
  };
  console.log("sort value :" + state.sortValue);

  return (
    <filterContext.Provider value={{ state, getSortValue }}>
      {children}
    </filterContext.Provider>
  );
}

export const useFilterContext = () => {
  return useContext(filterContext);
};
