import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import DetailedChit from '../../src/components/DetailedChit';
import {chitContext, chits} from '../../testData/chitContext';

test('Chit name is displayed', () => {
  const chit = chits[0];
  const {getByText} = render(
    <DetailedChit route={{params: {chitId: chit.id}}} />,
    {
      wrapper: chitContext,
    },
  );
  expect(getByText(chit.name)).toBeEnabled();
  expect(getByText(chit.amount.toString())).toBeEnabled();
  expect(getByText(chit.intervelInMonths.toString() + ' Month')).toBeEnabled();
});
