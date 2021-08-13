import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import NewChit from '../../src/components/NewChit';
import {ChitsProvider} from '../../src/contexts/ChitsContext';

test('new Chit Addition', () => {
  const {getByText} = render(<NewChit />, {wrapper: ChitsProvider});
  expect(getByText(/^Chit Name : $/)).toBeEnabled();
  expect(getByText(/^Start Date : $/)).toBeEnabled();
  expect(getByText(/^Save$/)).toBeEnabled();
});
