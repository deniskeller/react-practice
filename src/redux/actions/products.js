import axios from "axios";
import { GET_PRODUCTS, SET_LOADING } from "./actionTypes";

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const fetchGetProducts = (category, sortBy) => {
  return (dispatch) => {
    dispatch(setLoading(false));
    axios
      .get(
        `/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
          sortBy.type
        }&_order=${sortBy.order}`
      )
      .then((response) => dispatch(getProducts(response.data)));
  };
};

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});
