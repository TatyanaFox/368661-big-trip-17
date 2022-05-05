import { createElement } from '../render';

const sort = () => {
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

export default class SortView {
  getTemplate() {
    return sort();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}