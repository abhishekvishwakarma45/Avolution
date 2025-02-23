export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SET_SORT_VALUE": {
      return {
        ...state,
        sortValue: action.payload,
      };
    }
    default:
      return state;
  }
};
