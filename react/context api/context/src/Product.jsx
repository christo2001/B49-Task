import React, { useContext, createContext, useState } from "react";

// Create a context and store that in a variable
const ProductContext = createContext();

const productsinfo = [
    {  "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://o.remove.bg/downloads/41253239-2a94-4448-9c77-73cdfd40f20f/thumbnail-removebg-preview.png",}
]

function Productsprovider({children}){
    const[products,setproducts]=useState(productsinfo);

    return(
        <ProductContext.Provider value={{products,setproducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {Productsprovider,ProductContext}
// Create a component that will provide the context
// function AnimalProvider({ children }) {
//     const [animalSound, setAnimalSound] = useState('meow');

//     return (
//         <AnimalContext.Provider value={{ animalSound, setAnimalSound }}>
//             {children}
//         </AnimalContext.Provider>
//     );
// }

// export { AnimalProvider, AnimalContext };
