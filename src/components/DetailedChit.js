import React, {useContext, useMemo, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import chitsModel from '../models/chits';
import {updateInstallment} from '../models/chit';
import AddInstallment from './AddInstallment';
import Installments from './Installments';

const DetailedChit = ({route}) => {
  const {chits} = useContext(ChitsContext);
  const getChit = chitsModel.getById(chits, route.params.chitId);
  const [chit, setChit] = useState(getChit);
  const updateChitInstallment = installment => {
    setChit(updateInstallment({...chit}, installment));
  };
  return (
    <>
      <Text>{chit.name}</Text>
      <Text>{chit.amount}</Text>
      <Text>{chit.intervelInMonths} Month</Text>
      <AddInstallment updateChit={updateChitInstallment} />
      <Installments installments={chit.installments} />
    </>
  );
};

const style = StyleSheet.create({});

export default DetailedChit;
