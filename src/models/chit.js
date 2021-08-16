import {getDeviceId} from '../services/deviceInfo';

const chitModel = {
  newChit: (name, amount, installmentCount, intervelInMonths, startDate) => {
    const creationTime = new Date();
    const id = `${getDeviceId()}-${creationTime.getTime()}`;

    return {
      id,
      name,
      amount,
      installmentCount,
      intervelInMonths,
      startDate,
      creationTime,
      installments: [],
    };
  },
};

export const updateInstallment = (chit, {amount, auctionDate}) => {
  const creationTime = new Date();
  const id = `${creationTime.getTime()}`;
  chit.installments = [
    ...chit.installments,
    {amount, auctionDate, id, creationTime},
  ];
  return {...chit};
};

export default chitModel;
