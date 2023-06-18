

// reducers.js

import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  fruits: [
    { id: 1, name: 'Apple', price: 0.99 },
    { id: 2, name: 'Banana', price: 0.5 },
    { id: 3, name: 'Orange', price: 0.75 },
    { id: 4, name: 'Mango', price: 1.5 },
    { id: 5, name: 'Grapes', price: 2.99 },
  ],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((fruit) => fruit.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
