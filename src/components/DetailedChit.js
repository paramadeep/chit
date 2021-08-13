import React, {useContext, useEffect, useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';

const DetailedChit = ({navigation, routes}) => {
  const {chits} = useContext(ChitsContext);
  const [chit, setChit] = useState();
  useEffect(() => {
    setChit(chits(routes.params.chitIndex));
  }, [chits, routes]);
  return (
    <>
      <Text>{chit.name}</Text>
      <Text>{chit.amount}</Text>
    </>
  );
};

const style = StyleSheet.create({});

export default DetailedChit;
