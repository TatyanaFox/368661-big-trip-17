// import {FilterType} from '../const';

export const filterCost = (points) => {
  points.map((point) => point.basePrice).reduce((prev, curr) => prev + curr, 0);
};
