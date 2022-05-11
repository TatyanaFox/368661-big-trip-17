import { render } from '../framework/render.js';

import ListEventsView from '../view/list-events-view';
import EventView from '../view/event-view';
import EditEventView from '../view/edit-form';
import NoEventsView from '../view/no-event-view';

export default class EventPresenter {
  #eventContainer = null;
  #eventModel =null;

  #eventComponent = new EventView();
  #listEventComponent = new ListEventsView();
  #editEventView = new EditEventView();
  #noEventsView = new NoEventsView();

  #event = [];

  init = (eventContainer, eventModel) => {
    this.#eventContainer = eventContainer;
    this.#eventModel = eventModel;
    this.#event = [...this.#eventModel.point];

    render(this.#listEventComponent, this.#eventContainer);

    if (this.#event.length < 1) {
      render(this.#noEventsView, this.#listEventComponent.element);
    } else {
      for (let i = 0; i < this.#event.length; i++) {
        this.#renderEvent(this.#event[i]);
      }
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

    eventComponent.setEditClickHandler(() => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editEventComponent.setFormSubmitHandler(() => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(eventComponent, this.#listEventComponent.element);
  };
}
