import { SET_CATEGORY, SET_SORT_BY } from "./actionTypes";

export const setSortBy = (index) => ({
  type: SET_SORT_BY,
  payload: index,
});

export const setCategory = (index) => ({
  type: SET_CATEGORY,
  payload: index,
});
