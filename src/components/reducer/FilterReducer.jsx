export const FilterReducer = (state, action) => {
  let { sortValue } = state;

  switch (action.type) {
    case "SET_SORT_VALUE": {
      return {
        ...state,
        sortValue: action.payload,
      };
    }

    case "SORT_PRODUCTS": {
      let temp = action.payload;

      switch (sortValue) {
        case "A-Z":
          temp = [...action.payload].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          );
          break;
        case "Z-A":
          temp = [...action.payload].sort((a, b) =>
            b.name.toLowerCase().localeCompare(a.name.toLowerCase())
          );
          break;
        case "1-9":
          temp = [...action.payload].sort((a, b) => a.price - b.price);
          break;
        case "9-1":
          temp = [...action.payload].sort((a, b) => b.price - a.price);
          break;
        default:
          temp = [...action.payload];
      }

      return {
        ...state,
        filteredProducts: temp,
      };
    }

    default:
      return state;
  }
};
