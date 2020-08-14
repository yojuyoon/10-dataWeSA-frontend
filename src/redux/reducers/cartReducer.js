import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL,
} from "../actions/cartActions";

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let duplicateItem = false;
      state.forEach((el) => {
        if (el.id === action.payload.id) {
          duplicateItem = true;
        }
      });

      if (duplicateItem) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
