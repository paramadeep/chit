import React, {useState} from 'react';
import {Text, TextInput, Button} from 'react-native';
import DatePicker from './DatePicker';

const NewChit = () => {
  const [chitName, setChitName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Text>Chit Name : </Text>
      <TextInput
        placeholder="Enter Chit Name"
        onChange={setChitName}
        value={chitName}
      />
      <Text>Start Date : </Text>
      <DatePicker date={startDate} onChange={setStartDate} />
      <Button title="Save" />
    </>
  );
};

export default NewChit;
