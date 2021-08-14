import React, {useContext, useEffect, useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import chitsModel from '../models/chits';

const DetailedChit = ({navigation, route}) => {
  const {chits} = useContext(ChitsContext);
  const [chit, setChit] = useState();
  useEffect(() => {
    const chitById = chitsModel.getById(chits, route.params.chitId);
    setChit(chitById);
  }, [chits, route]);
  return (
    <>
      <Text>{chit.name}</Text>
      <Text>{chit.amount}</Text>
    </>
  );
};

const style = StyleSheet.create({});

export default DetailedChit;
