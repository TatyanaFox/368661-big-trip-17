import {getRandomData, getRandomNum} from '../utils/common';
import {types} from '../const';
import {generateDestination} from './destination';
import {generateOffers} from './offer';
import {generateDateTo, generateDateFrom} from '../utils/point';

const generateNum = (a, b) => {
  const num = getRandomNum(a, b);
  return num;
};

export const generatePoint = () => (
  {
    basePrice: generateNum(50, 1100),
    dateTo: generateDateTo(),
    dateFrom: generateDateFrom(),
    destination: generateDestination(),
    id: generateNum(0, 100),
    isFavorite: false,
    offers: generateOffers(),
    type: getRandomData(types),
  }
);
