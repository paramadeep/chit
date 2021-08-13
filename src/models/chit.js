import {getDeviceId} from '../services/deviceInfo';

const chitModel = {
  newChit: (name, amount, installmentCount, intervelInMonths, startDate) => {
    const id = new Date().getMilliseconds() + getDeviceId();
    const creationTime = new Date();
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
