import React, {useContext, useEffect, useState} from 'react';
import {Text, Pressable, StyleSheet, Button} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import chitsModel from '../models/chits';

const DetailedChit = ({route}) => {
  const {chits} = useContext(ChitsContext);
  const chit = chitsModel.getById(chits, route.params.chitId);
  return (
    <>
      <Text>{chit.name}</Text>
      <Text>{chit.amount}</Text>
      <Text>{chit.intervelInMonths} Month</Text>
      <Button title="Add Installment" />
    </>
  );
};

const style = StyleSheet.create({});

export default DetailedChit;
