

// ProductList.js
/*
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';

const ProductList = ({ fruits, addToCart }) => {
  const handleAddToCart = (fruit) => {
    addToCart(fruit);
  };

  

  return (
    <div >
      <h2>Product List</h2>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <h3>{fruit.name}</h3>
          <p>Price: ${fruit.price}</p>
          <button onClick={() => handleAddToCart(fruit)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  fruits: state.fruits,
});

export default connect(mapStateToProps, { addToCart })(ProductList);
*/

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';

const ProductList = ({ fruits, addToCart }) => {
  const [fruitQuantities, setFruitQuantities] = useState({});

  const handleAddToCart = (fruit) => {
    const quantity = fruitQuantities[fruit.id] || 1;
    addToCart({ ...fruit, quantity });
    setFruitQuantities((prevQuantities) => ({
      ...prevQuantities,
      [fruit.id]: 0,
    }));
  };

  const handleIncrementQuantity = (fruitId) => {
    setFruitQuantities((prevQuantities) => {
      const prevQuantity = prevQuantities[fruitId] || 0;
      return {
        ...prevQuantities,
        [fruitId]: prevQuantity + 1,
      };
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <h3>{fruit.name}</h3>
          <p>Price: ${fruit.price}</p>
          <button onClick={() => handleAddToCart(fruit)}>Add to Cart</button>
          <button onClick={() => handleIncrementQuantity(fruit.id)}>
            Kilograms
          </button>
          <p>Quantity: {fruitQuantities[fruit.id] || 0} kg</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fruits: state.fruits,
});

export default connect(mapStateToProps, { addToCart })(ProductList);
