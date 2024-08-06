import React, { useContext, useState } from "react";
import { ProductContext } from './Product';
import './product.css'

function Animalsound() {
const {name,setname} = useContext(ProductContext)



    return (
        <div>
           <input 
        type="text" 
        value={name} 
        onChange={(e) => setname(e.target.value)} 
      />
      <h1>The name is: {name}</h1>
    </div>
    );
}

export default Animalsound;
