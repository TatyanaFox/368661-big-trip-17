import AbstractView from '../framework/view/abstract-view';

export default class NoEventsView extends AbstractView {
  get template() {
    return '<p class="trip-events__msg">Click New Event to create your first point</p>';
  }
}
