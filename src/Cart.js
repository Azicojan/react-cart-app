

// Cart.js

/*
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './actions';
import './App.css'

const Cart = ({ cart, removeFromCart }) => {
  const handleRemoveFromCart = (fruitId) => {
    removeFromCart(fruitId);
  };

  
  
  return (
    <div className='cart'>
      <h2>Cart</h2>
      {cart.map((fruit) => (
        <div key={fruit.id}>
          <h3>{fruit.name}</h3>
          <p>Price: ${fruit.price}</p>
          <button onClick={() => handleRemoveFromCart(fruit.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);*/



import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './actions';
import './App.css'

const Cart = ({ cart, removeFromCart }) => {
  const handleRemoveFromCart = (fruitId) => {
    removeFromCart(fruitId);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((fruit) => {
      total += fruit.price * fruit.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className='cart'>
      <h2>Cart</h2>
      {cart.map((fruit) => (
        <div key={fruit.id}>
          <h3>{fruit.name}</h3>
          <p>Price: ${fruit.price}</p>
          <p>Quantity: {fruit.quantity} kg</p>
          <p>Subtotal: ${(fruit.price * fruit.quantity).toFixed(2)}</p>
          <button onClick={() => handleRemoveFromCart(fruit.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <h3>Total Price: ${calculateTotalPrice()}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
