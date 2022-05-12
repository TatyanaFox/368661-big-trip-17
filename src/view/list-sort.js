import AbstractView from '../framework/view/abstract-view';

const createSort = () => {
  const sortElement = (
    `<div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>`
  );
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortElement}
    </form>`
  );
};

export default class SortView extends AbstractView {
  get template() {
    return createSort();
  }
}
