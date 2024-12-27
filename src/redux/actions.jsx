import { addToCartItem, removeCartItem } from "./types";

export const addToCartAction = (item) => {
  return {
    type: addToCartItem,
    payload: item,
  };
};
