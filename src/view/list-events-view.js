import { createElement } from '../render';

export default class ListEventsView {
  getTemplate() {
    return '<ul class="trip-events__list"></ul>';
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
