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
                price: curr.price + price * quantity,
              }
            : curr
        );
      } else {
        let cartProduct = {
          id: id + selectedColor,
          name: singleProduct.name,
          selectedColor,
          selectedSize,
          price: price * quantity,
          quantity,
          image: singleProduct.image,
        };
        updatedCart = [...state.cart, cartProduct];
      }

      // Calculate the total price from updatedCart
      let newPrice = updatedCart.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);

      return {
        ...state,
        cart: updatedCart,
        totalprice: newPrice,
      };
    }

    case "TOGGLE_CART": {
      return {
        ...state,
        showcart: !state.showcart,
      };
    }

    case "REMOVE_ITEM": {
      let id = action.payload;
      let updatedCart = state.cart.filter((curr) => {
        return curr.id !== id;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};
