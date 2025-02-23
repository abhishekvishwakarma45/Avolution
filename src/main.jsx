import { createRoot } from "react-dom/client";
import React from "react";
import { ProductContextProvider } from "./components/context/ProductContext.jsx";
import FilterContextProvider from "./components/context/FilterContext.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </ProductContextProvider>
);
