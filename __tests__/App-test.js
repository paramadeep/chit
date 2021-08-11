import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

it('Has Chits displayed', () => {
  const {getByText} = render(<App />);
  expect(getByText(/^Chits$/)).toBeEnabled();
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});
