import React, { createContext, useState } from "react";

export const productcontext = createContext();

const Context = ({ children }) => {
  const [url, seturl] = useState([]);
  const [shortenedUrl, setShortenedUrl] = useState([]);

  return (
    <productcontext.Provider value={{shortenedUrl, setShortenedUrl, url, seturl }}>
      {children}
    </productcontext.Provider>
  );
};

export default Context;
