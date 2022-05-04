import dayjs from 'dayjs';

const getRandomData = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const getRandomNum = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizePointDueDate = (dueDate) => dayjs(dueDate).format('h:mm A');

export {getRandomData, getRandomNum, humanizePointDueDate};
