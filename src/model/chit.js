const chitModel = {
  newChit: (name, amount, installmentCount, intervelInMonths, startDate) => {
    return {name, amount, installmentCount, intervelInMonths, startDate};
  },
  updateIndex: (chit, index) => {
    chit.index = index;
  },
};

export default chitModel;
