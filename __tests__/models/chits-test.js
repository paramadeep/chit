import chitsModel from '../../src/models/chits';
import {newChit} from '../../testData';

test('able to add new chit', () => {
  const newChits = chitsModel.addNewChit([], newChit());
  expect(newChits.length).toBe(1);
});
