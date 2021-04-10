import { GET_PRODUCTS, SET_LOADING } from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default products;
