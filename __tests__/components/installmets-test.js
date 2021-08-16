import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Installments from '../../src/components/Installments';

test('display installment', () => {
  const {getByText} = render(
    <Installments installments={[{amount: 100, id: 1}]} />,
  );
  getByText('100');
});
