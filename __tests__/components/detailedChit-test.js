import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import DetailedChit from '../../src/components/DetailedChit';
import {chitContext, chits} from '../../testData/chitContext';

const renderChit = chit => {
  return render(<DetailedChit route={{params: {chitId: chit.id}}} />, {
    wrapper: chitContext,
  });
};

test('Chit name is display', () => {
  const chit = chits[0];
  const {getByText} = renderChit(chit);
  expect(getByText(chit.name)).toBeEnabled();
  expect(getByText('Add Installment')).toBeEnabled();
  expect(getByText(chit.amount.toString())).toBeEnabled();
  expect(getByText(chit.intervelInMonths.toString() + ' Month')).toBeEnabled();
});

test('Add Installment', () => {
  const chit = chits[0];
  const {getByText, getByPlaceholderText, queryByText} = renderChit(chit);
  fireEvent.press(getByText('Add Installment'));
  fireEvent.changeText(getByPlaceholderText('Enter Amount'), '123');
  expect(queryByText('Add Installment')).toBeNull();
  fireEvent.press(getByText('Save'));
  expect(queryByText('Save')).toBeNull();
  getByText('123');
});

test('do not update when installment amout is not filled', () => {
  const chit = chits[0];
  const {getByText, queryByText} = renderChit(chit);
  fireEvent.press(getByText('Add Installment'));
  expect(queryByText('Add Installment')).toBeNull();
  fireEvent.press(getByText('Save'));
  expect(queryByText('Add Installment')).toBeNull();
  getByText('Save');
});
