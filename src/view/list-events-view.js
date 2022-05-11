import AbstractView from '../framework/view/abstract-view';

export default class ListEventsView extends AbstractView {
  get template() {
    return '<ul class="trip-events__list"></ul>';
  }
}
