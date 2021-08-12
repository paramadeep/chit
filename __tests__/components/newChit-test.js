import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import NewChit from '../../src/components/NewChit';

test('Has Chits displayed', () => {
  const {getByText} = render(<NewChit />);
  expect(getByText(/^Chit Name : $/)).toBeEnabled();
  expect(getByText(/^Start Date : $/)).toBeEnabled();
  expect(getByText(/^Save$/)).toBeEnabled();
});
