import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  MINUS_PRODUCT_CART,
  PLUS_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const computedTotalCount = (newItems) => {
  const totalCount = Object.keys(newItems).reduce(
    (sum, key) => newItems[key].items.length + sum,
    0
  );
  return totalCount;
};

const computedTotalPrice = (newItems) => {
  const totalPrice = Object.keys(newItems).reduce(
    (sum, key) => newItems[key].totalPrice + sum,
    0
  );
  return totalPrice;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: computedTotalCount(newItems),
        totalPrice: computedTotalPrice(newItems),
      };
    }

    case PLUS_PRODUCT_CART: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: computedTotalCount(newItems),
        totalPrice: computedTotalPrice(newItems),
      };
    }

    case MINUS_PRODUCT_CART: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: computedTotalCount(newItems),
        totalPrice: computedTotalPrice(newItems),
      };
    }

    case REMOVE_PRODUCT_CART: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default cart;
