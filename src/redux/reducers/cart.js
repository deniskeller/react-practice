import { ADD_PRODUCT_TO_CART } from "../actions/actionTypes";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload],
        },
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };

    default:
      return state;
  }
};

export default cart;
