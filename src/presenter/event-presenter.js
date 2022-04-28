import EventView from '../view/event-view';
import ListEventsView from '../view/list-events-view';
import EditEventView from '../view/edit-form';

import { render } from '../render';

export default class EventPresenter {
  eventComponent = new EventView();
  listEventComponent = new ListEventsView();

  init = (eventContainer) => {
    this.eventContainer = eventContainer;

    render(this.listEventComponent, this.eventContainer);
    render(new EditEventView(), this.listEventComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.listEventComponent.getElement());
    }
  };
}
