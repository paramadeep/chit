import React, {useState, createContext} from 'react';
import chitsModel from '../models/chits';
import {newChit} from '../../testData';

export const ChitsContext = createContext();

export const ChitsProvider = ({children}) => {
  const [chits, setChits] = useState([newChit()]);
  const addChit = chit =>
    setChits(prevChits => chitsModel.addNewChit(prevChits, chit), []);

  return (
    <ChitsContext.Provider value={{chits, addChit}}>
      {children}
    </ChitsContext.Provider>
  );
};
