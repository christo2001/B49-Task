import React from 'react'
import App from './App.jsx'
import './product.css'



function Product({ id, name, price, addToCart, isInCart,img }) {
    return (
      <div className="product">
        <img src={img}/>
        <div className="box">
        <div className="details">
        <h4 className='name'>{name}</h4>
        </div>
        <h4 className="price">${price}</h4>
        {/* event for add to cart and remove from cart button */}
        <button
          className={isInCart ? 'remove-btn' : 'add-btn'} onClick={() => addToCart(id, !isInCart)}>
          {isInCart ? 'Remove From Cart' : 'Add to Cart'}
        </button>
      </div>
      </div>
    );
  }
  

export default Product
