export const ProductReducer = (state, action) => {
  let temp;
  const { allProducts } = state;
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "SET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "SET_FEATURED_PRODUCT":
      temp = Array.isArray(action.payload)
        ? allProducts.filter((curr) => curr.isFeature === true)
        : [];
      return {
        ...state,
        featuredProducts: temp,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};
