export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let updatedCart;
      let product = action.payload;
      let {
        id,
        selectedSize,
        selectedColor,
        price,
        quantity,
        singleProduct = {},
      } = product;

      let existingProductIndex = state.cart.findIndex(
        (product) => product.id === id + selectedColor
      );

      if (existingProductIndex >= 0) {
        updatedCart = state.cart.map((curr, index) =>
          index === existingProductIndex
            ? {
                ...curr,
                quantity: curr.quantity + quantity,
                price: price * (curr.quantity + quantity),
              }
            : curr
        );
      } else {
        let cartProduct = {
          id: id + selectedColor,
          name: singleProduct.name,
          selectedColor,
          selectedSize,
          price,
          quantity,
          image: singleProduct.image,
        };
        updatedCart = [...state.cart, cartProduct];
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "TOGGLE_CART": {
      // Toggle action
      return {
        ...state,
        showcart: !state.showcart,
      };
    }

    default:
      return state;
  }
};
