import React from 'react';
import {newChit} from './chit';
import {ChitsContext} from '../src/contexts/ChitsContext';

const chit1 = newChit();
const chit2 = newChit();
chit1.name = 'Chit1';
chit2.name = 'Chit2';
chit2.id = 'Chit2';
export const chits = [chit1, chit2];
const data = {
  chits,
};

export const chitContext = ({children}) => {
  return <ChitsContext.Provider value={data}>{children}</ChitsContext.Provider>;
};
