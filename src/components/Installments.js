import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Installment from './Installment';

const Installments = ({installments}) => {
  return (
    <>
      <Text> Hi </Text>
      {installments.map(installment => (
        <Installment key={installment.id} installment={installment} />
      ))}
    </>
  );
};

const style = StyleSheet.create({});

export default Installments;
