import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAddToCart = (productId) => {
    axios.post('/api/cart', { productId })
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            {cart[productId].name} - ${cart[productId].price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;