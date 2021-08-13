import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';

const Chits = () => {
  const {chits} = useContext(ChitsContext);
  return (
    <>
      <Text>{chits.length}</Text>
    </>
  );
};

export default Chits;
