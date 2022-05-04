import {getRandomData, getRandomNum} from '../utils';
import {types} from '../const';
import {destination} from './destination';

const generateNum = (a, b) => {
  const num = getRandomNum(a, b);
  return num;
};

const dest = destination;

export const generatePoint = () => (
  {
    basePrice: generateNum(50, 1100),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: dest,
    id: generateNum(0, 100),
    isFavorite: false,
    // offers: '123',
    type: getRandomData(types),
  }
);
