import { combineReducers } from "redux";
import filtersReducer from "../reducers/filters";
import productsReducer from "../reducers/products";

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
});

export default rootReducer;
