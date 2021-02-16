import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product); //compares existing items with new added items
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ), //compare product with existItem if they are equal to each other replace with item if they are not equal return previous value (x)
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }; // concatenate cartitems with items (display everything in cart)
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),   // Filter out id that is equal to action.payload  in cartAction payload = productId
      };

    default:
      return state;
  }
};
