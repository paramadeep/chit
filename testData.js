import chitsModel from './src/models/chit';

export const newChit = () => {
  const chit = chitsModel.newChit('deepak', 500, 3, 4, today());
  return chit;
};
export const today = () => {
  return new Date();
};
