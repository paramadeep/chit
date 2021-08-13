import {getDeviceId} from '../services/deviceInfo';

const chitModel = {
  newChit: (name, amount, installmentCount, intervelInMonths, startDate) => {
    const creationTime = new Date();
    const id = `${getDeviceId()}-${creationTime.getMilliseconds()}`;

    return {
      id,
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
