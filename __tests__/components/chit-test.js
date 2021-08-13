import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Chit from '../../src/components/Chit';

test('Chit name is deplayed', () => {
  const {getByText} = render(<Chit chit={{name: "deepak's chit"}} />);
  expect(getByText(/^deepak's chit$/)).toBeEnabled();
});
