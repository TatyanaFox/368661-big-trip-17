import {getRandomData, getRandomNum} from '../utils/point';
import {types} from '../const';
import {generateDestination} from './destination';
import {generateOffers} from './offer';

const generateNum = (a, b) => {
  const num = getRandomNum(a, b);
  return num;
};

export const generatePoint = () => (
  {
    basePrice: generateNum(50, 1100),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: generateDestination(),
    id: generateNum(0, 100),
    isFavorite: false,
    offers: generateOffers(),
    type: getRandomData(types),
  }
);
