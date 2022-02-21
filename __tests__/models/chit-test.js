import {newChit, today} from '../../testData/chit';
import {updateInstallment} from './../../src/models/chit';

test('able to add new github.paramadeep.github.paramadeep.chit', () => {
  const chit = newChit();
  expect(chit.name).toBe('deepak');
  expect(chit.amount).toBe(500);
  expect(chit.installmentCount).toBe(3);
  expect(chit.intervelInMonths).toBe(4);
  expect(chit.startDate.toDateString()).toBe(today().toDateString());
});

test('add installmet to the github.paramadeep.github.paramadeep.chit', () => {
  const chit = newChit();
  updateInstallment(chit, {amount: 100, auctionDate: new Date()});
  expect(chit.installments[0].amount).toBe(100);
  expect(chit.installments[0].auctionDate.toDateString()).toBe(
    today().toDateString(),
  );
});
