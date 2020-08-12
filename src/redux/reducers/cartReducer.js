import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.forEach((el) => {
        if (el.id === action.payload) {
          return state;
        }
      });
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
