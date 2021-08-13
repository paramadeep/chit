const chitModel = {
  newChit: (name, amount, installmentCount, intervelInMonths, startDate) => {
    const creationTime = new Date().getMilliseconds();
    return {
      name,
      amount,
      installmentCount,
      intervelInMonths,
      startDate,
      creationTime,
    };
  },
};

export default chitModel;
