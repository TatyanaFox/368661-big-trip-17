import {filterCost} from '../utils/filter';

export const generateFilter = () => Object.entries(filterCost).map(
  ([price]) => ({
    cost: price
  }),
);
