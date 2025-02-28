import Cart from "../../Cart";

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
                price:
                  (curr.price / curr.quantity) * (curr.quantity + quantity),
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

      let newPrice = state.cart.reduce((acc, curr) => {
        let totalprice = acc + curr.price;
        return totalprice;
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
