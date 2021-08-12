import React from 'react';
import {Text} from 'react-native';

const Chits = ({chits}) => {
  return (
    <>
      <Text>{chits.length}</Text>
    </>
  );
};

export default Chits;
