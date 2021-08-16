import React, {useState} from 'react';
import {Text, StyleSheet, Button, TextInput} from 'react-native';
import DatePicker from '../DatePicker';

const InstallmentForm = ({addInstallment}) => {
  const [amount, setAmount] = useState('');
  const [auctionDate, setAuctionDate] = useState(new Date());
  const onSave = () => {
    if (amount) {
      addInstallment({amount, autionDate: auctionDate});
    }
  };

  return (
    <>
      <>
        <Text>Amount : </Text>
        <TextInput
          testID="amount"
          placeholder="Enter Amount"
          onChangeText={setAmount}
          value={amount}
          keyboardType="number-pad"
        />
        <Text>Aution Date : </Text>
        <DatePicker date={auctionDate} onChange={setAuctionDate} />
        <Button title="Save" onPress={onSave} />
      </>
    </>
  );
};

const style = StyleSheet.create({});

export default InstallmentForm;
