import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import AddChitButton from '../../src/components/AddChitButton';

test('Has Chits displayed', () => {
  const {getByText} = render(<AddChitButton />);
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});
