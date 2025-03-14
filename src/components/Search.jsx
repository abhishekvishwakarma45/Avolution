import React, { Fragment, useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Added useLocation to read query params
import { IoIosSearch } from "react-icons/io";
import { useFilterContext } from "./context/FilterContext";
import Product from "./Product";
import FormatPrice from "./FormatPrice";

const Search = () => {
  const location = useLocation();
  const { updateFilterValue, FilterState } = useFilterContext();
  const { filteredProducts } = FilterState;
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("value");
    if (search) {
      setSearchQuery(search);
      updateFilterValue("searchvalue", search);
    }
  }, [location, updateFilterValue]);

  return (
    <Fragment>
      <h1 className="text-center my-4 capitalize text-2xl">
        {filteredProducts.length} products available
      </h1>

      <div className="w-auto h-auto AllProducts">
        <div className=" my-10 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 sm:px-4 lg:px-20">
          {filteredProducts.map((current, index) => {
            return <Product key={index} current={current} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
