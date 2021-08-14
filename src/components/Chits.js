import React, {useContext} from 'react';
import {ChitsContext} from '../contexts/ChitsContext';
import Chit from './Chit';

const Chits = ({gotoDetailedChit}) => {
  const {chits} = useContext(ChitsContext);
  return (
    <>
      {chits.map(chit => (
        <Chit chit={chit} key={chit.id} gotoDetailedChit={gotoDetailedChit} />
      ))}
    </>
  );
};

export default Chits;
