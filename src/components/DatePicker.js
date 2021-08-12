import React, {useState} from 'react';
import {TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({date, onChange}) => {
  const [show, setShow] = useState(false);
  const showDatePicker = () => {
    setShow(true);
  };
  const updateDate = (e, value) => {
    setShow(false);
    if (value) {
      onChange(value);
    }
  };
  const readableDate = () => {
    return date.toDateString();
  };
  return (
    <>
      <TextInput
        placeholder="Select Start Date"
        onTouchEnd={showDatePicker}
        value={readableDate()}
      />
      <TextInput />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          mode="date"
          display="default"
          onChange={updateDate}
          value={date}
        />
      )}
    </>
  );
};

export default DatePicker;
