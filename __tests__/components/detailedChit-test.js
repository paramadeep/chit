import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import DetailedChit from '../../src/components/DetailedChit';
import ChitsProvider from '../../src/contexts/ChitsContext';

test('Chit name is displayed', () => {
  // const chit = {
  //   name: "deepak's chit",
  //   amount: 5000,
  // };
  // const {getByText} = render(<DetailedChit chit={chit} />, {
  //   wrapper: ChitsProvider,
  // });
  // expect(getByText(/^deepak's chit$/)).toBeEnabled();
  // expect(getByText(/^5000$/)).toBeEnabled();
});
