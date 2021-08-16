import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Installment = ({installment}) => {
  return (
    <>
      <Text>{installment.amount}</Text>
      <Text>{installment.auctionDate}</Text>
    </>
  );
};

const style = StyleSheet.create({});

export default Installment;
