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

    for (let i = 0; i < this.#event.length; i++) {
      this.#renderEvent(this.#event[i]);
    }
  };

  #renderEvent = (event) => {
    const eventComponent = new EventView(event);
    const editEventComponent = new EditEventView(event);


    const replacePointToForm = () => {
      this.#listEventComponent.element.replaceChild(editEventComponent.element, eventComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#listEventComponent.element.replaceChild(eventComponent.element, editEventComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    eventComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editEventComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });


    render(eventComponent, this.#listEventComponent.element);
  };
}
