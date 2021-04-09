const initialState = {
  products: [],
  loading: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default products;
