import React, {useCallback} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const Chit = ({chit, gotoDetailedChit}) => {
  const onClick = useCallback(() => {
    gotoDetailedChit(chit.id);
  }, [chit.id, gotoDetailedChit]);

  return (
    <>
      <Pressable style={style.chit} onPress={onClick}>
        <Text>{chit.name}</Text>
        <Text>{chit.amount}</Text>
      </Pressable>
    </>
  );
};

const style = StyleSheet.create({
  chit: {height: 60, padding: 20},
});

export default Chit;
