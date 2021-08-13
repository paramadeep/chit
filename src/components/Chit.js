import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const Chit = ({chit}) => {
  return (
    <>
      <Pressable style={style.chit}>
        <Text>{chit.name}</Text>
      </Pressable>
    </>
  );
};

const style = StyleSheet.create({
  chit: {height: 50, padding: 10},
});

export default Chit;
