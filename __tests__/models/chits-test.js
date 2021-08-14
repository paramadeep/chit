import chitsModel from '../../src/models/chits';
import {newChit} from '../../testData';

const newChits = () => {
  const chit1 = newChit();
  chit1.id = 1;
  const chit2 = newChit();
  chit2.id = 2;
  const chits = [chit1, chit2];
  return chits;
};

test('able to add new chit', () => {
  const actualChits = chitsModel.addNewChit([], newChit());
  expect(actualChits.length).toBe(1);
});

test('return chit by id', () => {
  const chits = newChits();
  const filteredChit = chitsModel.getById(chits, 1);
  expect(filteredChit.id).toBe(1);
});

test('getById return null in absence matching id', () => {
  const chits = newChits();
  const filteredChit = chitsModel.getById(chits, 3);
  expect(filteredChit).toBeUndefined();
});
