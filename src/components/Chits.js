import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import {Chit} from './Chit';

const Chits = () => {
  const {chits} = useContext(ChitsContext);
  return (
    <>
      {chits.map(chit => {
        return <Text> {chit.name} </Text>;
      })}
    </>
  );
};

export default Chits;
