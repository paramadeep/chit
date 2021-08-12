import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import DatePicker from '../../src/components/DatePicker';

test('Had Default Date', () => {
  const {getByDisplayValue} = render(
    <DatePicker date={new Date('Aug 14 2021')} onChange={() => {}} />,
  );
  expect(getByDisplayValue('Sat Aug 14 2021')).toBeEnabled();
});
