import React, {useState, createContext} from 'react';

export const ChitsContext = createContext();

export const ChitsProvider = ({children}) => {
  const [chits, setChits] = useState([]);
  const addChit = chit => setChits(prevChits => [...prevChits, chit], []);

  return (
    <ChitsContext.Provider value={{chits, addChit}}>
      {children}
    </ChitsContext.Provider>
  );
};
