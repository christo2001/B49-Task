import React, { useContext, createContext, useState } from "react";

// Create a context and store that in a variable
const ProductContext = createContext();


function Productsprovider({children}){
    const[name,setname]=useState('');

    return(
        <ProductContext.Provider value={{name,setname}}>
            {children}
        </ProductContext.Provider>
    )
}

export {Productsprovider,ProductContext}

