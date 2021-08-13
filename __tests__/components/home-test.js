import 'react-native';
import React from 'react';
import Home from '../../src/components/Home';
import {render} from '@testing-library/react-native';
import {ChitsProvider} from '../../src/contexts/ChitsContext';

it('Has Chits displayed', () => {
  const {getByText} = render(<Home />, {wrapper: ChitsProvider});
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});
