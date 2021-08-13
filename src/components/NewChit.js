import React, {useContext, useState} from 'react';
import {Text, TextInput, Button} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import DatePicker from './DatePicker';

const NewChit = ({navigation}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const {addChit} = useContext(ChitsContext);
  const saveChit = () => {
    if (name) {
      addChit({name, amount, startDate});
      navigation.goBack();
    }
  };
  return (
    <>
      <Text>Chit Name : </Text>
      <TextInput
        testID="name"
        placeholder="Enter Chit Name"
        onChangeText={setName}
        value={name}
      />
      <Text>Amount : </Text>
      <TextInput
        testID="amount"
        placeholder="Enter Amount"
        onChangeText={setAmount}
        value={amount}
        keyboardType="number-pad"
      />
      <Text>Start Date : </Text>
      <DatePicker date={startDate} onChange={setStartDate} />
      <Button title="Save" onPress={saveChit} />
    </>
  );
};

export default NewChit;
