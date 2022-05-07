import ListEventsView from '../view/list-events-view';
import EventView from '../view/event-view';
import EditEventView from '../view/edit-form';

import { render } from '../render';

export default class EventPresenter {
  #eventContainer = null;
  #eventModel =null;

  #eventComponent = new EventView();
  #listEventComponent = new ListEventsView();
  #editEventView = new EditEventView();

  #event = [];

  init = (eventContainer, eventModel) => {
    this.#eventContainer = eventContainer;
    this.#eventModel = eventModel;
    this.#event = [...this.#eventModel.point];

    render(this.#listEventComponent, this.#eventContainer);
    render(new EditEventView(this.#event[0]), this.#listEventComponent.element);

    for (let i = 1; i < this.#event.length; i++) {
      render(new EventView(this.#event[i]), this.#listEventComponent.element);
    }
  };


}
