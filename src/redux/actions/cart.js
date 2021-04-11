import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  MINUS_PRODUCT_CART,
  PLUS_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
} from "./actionTypes";

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT_CART,
  payload: id,
});

export const plusProductCart = (id) => ({
  type: PLUS_PRODUCT_CART,
  payload: id,
});

export const minusProductCart = (id) => ({
  type: MINUS_PRODUCT_CART,
  payload: id,
});
