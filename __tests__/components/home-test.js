import 'react-native';
import React from 'react';
import Home from '../../src/components/Home';
import {render} from '@testing-library/react-native';
import {newChit} from '../../testData';
import {ChitsProvider, ChitsContext} from '../../src/contexts/ChitsContext';

it('Has new chit button displayed', () => {
  const {getByText} = render(<Home />, {wrapper: ChitsProvider});
  expect(getByText(/^\+ New Chit$/)).toBeEnabled();
});

const wrapper = ({children}) => {
  const chit1 = newChit();
  const chit2 = newChit();
  chit1.name = 'Chit1';
  chit2.name = 'Chit2';
  chit2.id = 'Chit2';
  const data = {
    chits: [chit1, chit2],
  };
  return <ChitsContext.Provider value={data}>{children}</ChitsContext.Provider>;
};

it('Displays Chits List', () => {
  const {getByText} = render(<Home />, {wrapper});
  expect(getByText('Chit1')).toBeEnabled();
  expect(getByText('Chit2')).toBeEnabled();
});
