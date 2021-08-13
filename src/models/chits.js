import chitModel from './chit';

const chitsModel = {
  addNewChit: (chits, chit) => {
    return [...chits, chit];
  },
};

export default chitsModel;
