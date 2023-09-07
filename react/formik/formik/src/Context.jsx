
import React, { createContext, useState } from 'react';

export const Namecontext = createContext();

const Context = ({children}) => {

    const [Name,setname] = useState([])
    const [Author,setauthor] = useState([])
   

  return (
    <div>
        <Namecontext.Provider value={{Name,setname,Author,setauthor}}>
            {children}
        </Namecontext.Provider>
    </div>
  )
}

export default Context

