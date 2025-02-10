export const ProductReducer = (state, action) => {
  let featuredProducts;
  switch (action.type) {
    case "SET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "SET_FEATURED_PRODUCT":
      featuredProducts = action.payload.filter(
        (curr) => curr.isFeature === true
      );
      return {
        ...state,
        featuredProducts: featuredProducts,
      };
    default:
      return state;
  }
};
