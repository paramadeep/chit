import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const Chit = ({chit}) => {
  const nextInstallmentDate = () => {
    return 1;
  };
  const endChitDate = () => {
    return 1;
  };

  return (
    <>
      <Pressable style={style.chit}>
        <Text>{chit.name}</Text>
        <Text>{chit.amount}</Text>
        <Text>Next: {nextInstallmentDate()}</Text>
        <Text>End: {endChitDate()}</Text>
      </Pressable>
    </>
  );
};

const style = StyleSheet.create({
  chit: {height: 60, padding: 20},
});

export default Chit;
