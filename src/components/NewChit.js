import React, {useContext, useState} from 'react';
import {Text, TextInput, Button} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import chitModel from '../model/chit';
import DatePicker from './DatePicker';

const NewChit = ({navigation}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [installments, setInstallments] = useState('');
  const [intervels, setIntervels] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const {addChit} = useContext(ChitsContext);
  const saveChit = () => {
    if (name) {
      const chit = chitModel.newChit(
        name,
        amount,
        installments,
        intervels,
        startDate,
      );
      addChit(chit);
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
      <Text>No. Of Installments : </Text>
      <TextInput
        testID="installments"
        placeholder="Enter no. of installments"
        onChangeText={setInstallments}
        value={installments}
        keyboardType="number-pad"
      />
      <Text>Intervel in Months : </Text>
      <TextInput
        testID="intervels"
        placeholder="Enter no. of months"
        onChangeText={setIntervels}
        value={intervels}
        keyboardType="number-pad"
      />
      <Text>Start Date : </Text>
      <DatePicker date={startDate} onChange={setStartDate} />
      <Button title="Save" onPress={saveChit} />
    </>
  );
};

export default NewChit;
