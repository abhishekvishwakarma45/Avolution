export const FilterReducer = (state, action) => {
  let { sortValue, filter } = state;
  let { category, brand, size, color, price, searchvalue } = filter;

  switch (action.type) {
    case "SET_SORT_VALUE": {
      return {
        ...state,
        sortValue: action.payload,
      };
    }

    case "SORT_PRODUCTS": {
      let temp = [...action.payload];

      switch (state.sortValue) {
        case "A-Z":
          temp.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          );
          break;
        case "Z-A":
          temp.sort((a, b) =>
            b.name.toLowerCase().localeCompare(a.name.toLowerCase())
          );
          break;
        case "1-9":
          temp.sort((a, b) => a.price - b.price);
          break;
        case "9-1":
          temp.sort((a, b) => b.price - a.price);
          break;
        default:
          temp = [...action.payload];
      }

      return {
        ...state,
        filteredProducts: temp,
      };
    }

    case "UPDATE_FILTER_VALUE": {
      let { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };
    }

    case "FILTER_PRODUCTS": {
      let filteredProducts = [...action.payload];

      if (searchvalue) {
        filteredProducts = filteredProducts.filter((current) => {
          return current.name.toLowerCase().includes(searchvalue.toLowerCase());
        });
      }

      if (brand) {
        filteredProducts = filteredProducts.filter(
          (curr) => curr.brand === brand
        );
      }

      if (price) {
        filteredProducts = filteredProducts.filter(
          (curr) => curr.price <= price
        );
      }

      if (size) {
        filteredProducts = filteredProducts.filter((curr) => {
          return curr.size.includes(size);
        });
      }

      if (color) {
        filteredProducts = filteredProducts.filter((curr) => {
          return curr.color.includes(color);
        });
      }

      if (category) {
        filteredProducts = filteredProducts.filter(
          (curr) => curr.category === category
        );
      }

      return {
        ...state,
        filteredProducts,
      };
    }

    case "CLEAR_FILTER":
      return {
        ...state,
        filter: {
          category: "",
          brand: "",
          size: "",
          color: "",
          price: 0,
        },
      };

    default:
      return state;
  }
};
