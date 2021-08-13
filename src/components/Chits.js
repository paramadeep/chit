import React, {useContext} from 'react';
import {ChitsContext} from '../contexts/ChitsContext';
import Chit from './Chit';

const Chits = () => {
  const {chits} = useContext(ChitsContext);
  return (
    <>
      {chits.map(chit => (
        <Chit chit={chit} key={chit.creationTime} />
      ))}
    </>
  );
};

export default Chits;
