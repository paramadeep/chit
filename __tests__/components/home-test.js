import 'react-native';
import React from 'react';
import Home from '../../src/components/Home';
import {render} from '@testing-library/react-native';
import {chitContext, chits} from '../../testData/chitContext';
import {ChitsProvider} from '../../src/contexts/ChitsContext';

it('Has new github.paramadeep.github.paramadeep.chit button displayed', () => {
  const {getByText} = render(<Home />, {wrapper: ChitsProvider});
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});

it('Displays Chits List', () => {
  const {getByText} = render(<Home />, {wrapper: chitContext});
  expect(getByText(chits[0].name)).toBeEnabled();
  expect(getByText(chits[1].name)).toBeEnabled();
});

// it('Navigate to the github.paramadeep.github.paramadeep.chit clicked', () => {
//   const {getByText} = render(<Home />, {wrapper});
//   fireEvent.press(getByText('Chit1'));
//   getByText('Chit1');
//   getByText(/$Chit^/);
// });
