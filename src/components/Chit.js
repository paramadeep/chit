import React from 'react';
import {Text} from 'react-native';

const Chit = ({chit}) => {
  return (
    <>
      <Text>{chit.name}</Text>
    </>
  );
};

export default Chit;
