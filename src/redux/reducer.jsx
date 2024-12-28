import { addToCartItem, removeCartItem } from "./types";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCartItem:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case removeCartItem:
      return {
        ...state,
        cart: state.cart.filter((eachItem) => eachItem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
