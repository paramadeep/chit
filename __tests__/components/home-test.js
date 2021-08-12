import 'react-native';
import React from 'react';
import Home from '../../src/components/Home';
import {render} from '@testing-library/react-native';

it('Has Chits displayed', () => {
  const {getByText} = render(<Home />);
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});
