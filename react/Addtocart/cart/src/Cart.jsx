import React, { useState } from 'react';
import './cart.css';
import Product from './Product';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Cart({ cartItems, products }) {
  const [cartVisible, setCartVisible] = useState(false);

  //this functionality helps us when we tap on the cart image it will open the cart box
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  //this functionality check how many products in the cart
  const itemCount = cartItems.length;

  return (
    <>
    {/* display how many products in the cart */}
      <p className='count'> {itemCount}</p>
      {/* onclick event to open cart box */}
      <h2 className='open' onClick={toggleCart}>
      {/* used fontawesome to get cart image */}
      <FontAwesomeIcon className='fontawesome' icon={faCartShopping} />
      </h2>
      <div className={`cart ${cartVisible ? 'cart-active' : ''}`}>
        {/* onclick event to close cart box  */}
        <h2 className='close' onClick={toggleCart}>Close</h2>
        <h2>Cart</h2>
        
        {/* display cart products in order  */}
        <ul className="cart-list">
          {cartItems.map(item => {
            const product = products.find(product => product.id === item.id);
            return (
              <li key={item.id} className="cart-item">
                <img src={product.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <button className='btn'>order now</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Cart;
