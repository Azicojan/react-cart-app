

// actions.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (fruit) => ({
  type: ADD_TO_CART,
  payload: fruit,
});

export const removeFromCart = (fruitId) => ({
  type: REMOVE_FROM_CART,
  payload: fruitId,
});

