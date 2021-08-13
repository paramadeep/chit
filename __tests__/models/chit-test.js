import chitModel from '../../src/model/chit';
function newChit() {
  const chit = chitModel.newChit('deepak', 500, 3, 4, today());
  return chit;
}
function today() {
  return new Date();
}

test('able to add new chit', () => {
  const chit = newChit();
  expect(chit.name).toBe('deepak');
  expect(chit.amount).toBe(500);
  expect(chit.installmentCount).toBe(3);
  expect(chit.intervelInMonths).toBe(4);
  expect(chit.startDate.toDateString()).toBe(today().toDateString());
});

test('update index of chit', () => {
  const chit = newChit();
  chitModel.updateIndex(chit, 1);
  expect(chit.index).toBe(1);
});
