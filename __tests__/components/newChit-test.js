import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NewChit from '../../src/components/NewChit';
import {ChitsProvider, ChitsContext} from '../../src/contexts/ChitsContext';

test('Validate Field Displayed', () => {
  const {getByText} = render(<NewChit />, {wrapper: ChitsProvider});
  expect(getByText(/^Chit Name : $/)).toBeEnabled();
  expect(getByText(/^Start Date : $/)).toBeEnabled();
  expect(getByText(/^Amount : $/)).toBeEnabled();
  expect(getByText(/^Save$/)).toBeEnabled();
});

test('add new chit navigates back', () => {
  const navigation = {};
  navigation.goBack = jest.fn();
  const {getByText, getByTestId} = render(<NewChit navigation={navigation} />, {
    wrapper: ChitsProvider,
  });
  fireEvent.changeText(getByTestId('name'), '123');
  fireEvent.press(getByText(/^Save$/));
  expect(navigation.goBack.mock.calls.length).toBe(1);
});

test('save new chit add it to the context', () => {
  const navigation = {goBack: () => {}};
  const addChit = jest.fn();
  const wrapper = ({children}) => (
    <ChitsContext.Provider value={{addChit}}>{children}</ChitsContext.Provider>
  );
  const {getByText, getByTestId} = render(<NewChit navigation={navigation} />, {
    wrapper,
  });
  fireEvent.changeText(getByTestId('name'), 'Name');
  fireEvent.changeText(getByTestId('amount'), '123');
  fireEvent.press(getByText(/^Save$/));
  expect(addChit.mock.calls.length).toBe(1);
  expect(addChit.mock.calls[0][0].name).toBe('Name');
  expect(addChit.mock.calls[0][0].amount).toBe('123');
  expect(addChit.mock.calls[0][0].startDate.toDateString()).toBe(
    new Date().toDateString(),
  );
});
