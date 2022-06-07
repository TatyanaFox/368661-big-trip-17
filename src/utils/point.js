import dayjs from 'dayjs';
import { getRandomNum } from './common';

const generateDateFrom = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomNum(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

const generateDateTo = () => {
  const daysGap = getRandomNum(0, 24);

  return daysGap;
};

const humanizePointDueDate = (dueDate) => dayjs(dueDate).format('h:mm A');

const isEventPassed = (dueDate) => dueDate && dayjs().isAfter(dueDate, 'D');

export {humanizePointDueDate, isEventPassed, generateDateTo, generateDateFrom};
