import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Installment from '../../src/components/Installment';

test('display installment', () => {
  const {getByText} = render(<Installment installment={{amount: 100}} />);
  getByText('100');
});
