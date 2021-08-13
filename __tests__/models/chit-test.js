import chitModel from '../../src/model/chit';
import {newChit, today} from '../../testData';

test('able to add new chit', () => {
  const chit = newChit();
  expect(chit.name).toBe('deepak');
  expect(chit.amount).toBe(500);
  expect(chit.installmentCount).toBe(3);
  expect(chit.intervelInMonths).toBe(4);
  expect(chit.startDate.toDateString()).toBe(today().toDateString());
});
