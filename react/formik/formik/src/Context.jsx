
import React, { createContext, useState } from 'react';

export const Namecontext = createContext();

const Context = ({children}) => {

    const [Name,setname] = useState([])
  return (
    <div>
        <Namecontext.Provider value={{Name,setname}}>
            {children}
        </Namecontext.Provider>
    </div>
  )
}

export default Context

