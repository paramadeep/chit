import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Chit from '../../src/components/Chit';

test('Chit name is deplayed', () => {
  const chit = {
    name: "deepak's chit",
    amount: 5000,
  };
  const {getByText} = render(<Chit chit={chit} />);
  expect(getByText(/^deepak's chit$/)).toBeEnabled();
  expect(getByText(/^5000$/)).toBeEnabled();
  // expect(getByText(/^Next: 1$/)).toBeEnabled();
  // expect(getByText(/^End: 1$/)).toBeEnabled();
});
