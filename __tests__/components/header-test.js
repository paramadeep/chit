import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../../src/components/Header';

test('Has Chits displayed', () => {
  const {getByText} = render(<Header />);
  expect(getByText(/^Chits$/)).toBeEnabled();
});
