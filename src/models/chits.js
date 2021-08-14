const chitsModel = {
  addNewChit: (chits, chit) => {
    return [...chits, chit];
  },
  getById: (chits, id) => {
    return chits.find(chit => chit.id === id);
  },
};

export default chitsModel;
