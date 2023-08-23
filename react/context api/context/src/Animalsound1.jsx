import React, { useContext, useState } from "react";
import { ProductContext } from './Animalcontext';
import './product.css'

function Animalsound() {
    const { products } = useContext(ProductContext);

    // Create a state to keep track of the quantity for each product
    const [quantities, setQuantities] = useState(products.map(product => ({ id: product.id, quantity: 1 })));

    const handleQuantityChange = (productId, newQuantity) => {
        const product = products.find(p => p.id === productId);
        
        if (newQuantity < 1 || newQuantity > product.stock) {
            alert("Quantity cannot be less than 1 or greater than the  available stock.");
            return;
        }

        setQuantities(prevQuantities => prevQuantities.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    return (
        <div>
            {products.map((p, index) => (
                <div key={index} className="parent">
                     <img src={p.thumbnail} className="thumbnail"/>
                     <div className="details">
                     <h1>{p.title}</h1>
                     <p >{p.description}</p>
                    <span className="available">Available Stock: {p.stock}</span>
                    <p> price:{p.price}</p>

                    <div className="price">
                    <input
                        type="number"
                        value={quantities[index].quantity}
                        min="1"
                        onChange={e => handleQuantityChange(p.id, parseInt(e.target.value))}
                        className="quantity-input"
                    />
                     <p>total: {p.price * quantities[index].quantity}</p>
                    </div>
                    </div>
                    
                </div>
                
            ))}
        </div>
    );
}

export default Animalsound;
