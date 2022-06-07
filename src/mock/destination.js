import {getRandomData, getRandomNum} from '../utils/common';

const places = ['Amsterdam', 'Berlin', 'Moscow', 'Paris', 'Tokio'];

export const generateDestination = () => (
  {
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: getRandomData(places),
    pictures: [
      {
        src: `http://picsum.photos/248/152?r=${getRandomNum(0, 10)}`,
        description: 'Chamonix parliament building'
      }
    ]
  }
);
