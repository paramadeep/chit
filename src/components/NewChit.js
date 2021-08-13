import React, {useContext, useState} from 'react';
import {Text, TextInput, Button} from 'react-native';
import {ChitsContext} from '../contexts/ChitsContext';
import DatePicker from './DatePicker';

const NewChit = ({navigation}) => {
  const [chitName, setChitName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const {addChit} = useContext(ChitsContext);
  const saveChit = () => {
    if (chitName) {
      addChit({chitName, startDate});
      navigation.goBack();
    }
  };
  return (
    <>
      <Text>Chit Name : </Text>
      <TextInput
        placeholder="Enter Chit Name"
        onChangeText={setChitName}
        value={chitName}
      />
      <Text>Start Date : </Text>
      <DatePicker date={startDate} onChange={setStartDate} />
      <Button title="Save" onPress={saveChit} />
    </>
  );
};

export default NewChit;
