import {FilterType} from '../const';
import {isEventPassed} from './point';

const filter = {
  [FilterType.EVERYTHING]: (events) => events.filter((event) => event),
  [FilterType.PAST]: (events) => events.filter((event) => isEventPassed(event.dateTo)),
  [FilterType.FUTURE]: (events) => events.filter((event) => isEventPassed(event.dateFrom)),
};

export {filter};
