import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';

it('Has Chits displayed', () => {
  const {getByText} = render(<App />);
  expect(getByText(/^Chits$/)).toBeEnabled();
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});

it('Navigated To New Chits', () => {
  const {getByText} = render(<App />);
  fireEvent.press(getByText(/^\+ New Chit$/));
  expect(getByText(/^New Chit$/)).toBeEnabled();
});
