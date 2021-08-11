import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import AddChit from '../../src/components/AddChit';

test('Has Chits displayed', () => {
  const {getByText} = render(<AddChit />);
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});
