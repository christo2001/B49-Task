import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import Cart from './Cart';
import Product from './Product';
import g1 from './images/gc1.jpg'
import g2 from './images/g2.jpg'
import g3 from './images/g3.jpg'
import g4 from './images/g4.jpg'
import g5 from './images/g5.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [cart, setCart] = useState([]);

  // addtocart functionality
  const addToCart = (productId, isAdding) => {
    const productToAdd = products.find(product => product.id === productId);
    if (isAdding) {
      setCart([...cart, productToAdd]);
    } else {
      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
    }
  };

  //product images and their costs
  const products = [
    { id: 1, img: g1, name: 'cyber bunk', price: 10 },
    { id: 2, img: g2, name: 'last of us ', price: 15 },
    { id: 3, img: g3,name: 'god of war', price: 20 },
    { id: 4, img: g4,name: 'RDR 2', price: 20 },
    { id: 5, img: g5,name: 'witcher', price: 20 },
  ];

  return (
    
    <div className="app">
      <Cart cartItems={cart} products={products} /> {/* used props check cart.jsx */}
      <h1 className='text-center'>Products</h1>
      <div className="products">
        <div className='p'>
        {products.map(product => (
        <Product key={product.id} id={product.id} img={product.img}  name={product.name} price={product.price} addToCart={addToCart} 
        isInCart={cart.some(item => item.id === product.id)}/> //used props check product.jsx
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;
