import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import Chit from './Chit';

const Chits = () => {
  const {chits} = useContext(ChitsContext);
  return (
    <>
      {chits.map(chit => (
        <Chit chit={chit} />
      ))}
    </>
  );
};

export default Chits;
