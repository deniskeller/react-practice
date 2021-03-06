import { combineReducers } from "redux";
import filters from "../reducers/filters";
import products from "../reducers/products";
import cart from "../reducers/cart";

const rootReducer = combineReducers({
  filters,
  products,
  cart,
});

export default rootReducer;
