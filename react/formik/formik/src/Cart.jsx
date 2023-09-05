// Cart.jsx
import React, { useContext } from 'react';
import { Namecontext } from './Context';

const Cart = () => {
  // Use the useContext hook to access the Namecontext
  const { Name } = useContext(Namecontext);

  const handleedit = (event) =>{
    const index = event.target.getAttribute('data-index')
    const record = Name[index]
    console.log(record)
  }
  return (
    <div>
        {Name.map((item,index)=>(
          <div key={index}>
            <p> fname:{item.fname}</p>
            <p>lname:{item.lname}</p>
            <button data-index={index} onClick={handleedit}>edit</button>
          </div>
        
      ))}
    </div>
  );
};

export default Cart;
