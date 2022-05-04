import {getRandomNum} from '../utils';
import {types} from '../const';

export const generateOffers = () => (
  {
    type: types,
    offers: [
      {
        id: getRandomNum(0, 100),
        title: 'Upgrade to a business class',
        price: getRandomNum(10, 500)
      }
    ]
  }
);

