const chitsModel = {
  addNewChit: (chits, chit) => {
    return [...chits, chit];
  },
  getById: (chits, id) => {
    const foundChit = chits.find(chit => chit.id === id);
    return foundChit ? {...foundChit} : null;
  },
};

export default chitsModel;
