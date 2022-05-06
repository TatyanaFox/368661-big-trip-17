import ListEventsView from '../view/list-events-view';
import EventView from '../view/event-view';
import EditEventView from '../view/edit-form';

import { render } from '../render';

export default class EventPresenter {
  eventComponent = new EventView();
  listEventComponent = new ListEventsView();
  editEventView = new EditEventView();

  init = (eventContainer, eventModel) => {
    this.eventContainer = eventContainer;
    this.eventModel = eventModel;
    this.event = [...this.eventModel.getPoint()];
    this.offer = [...this.eventModel.getOffer()];

    render(this.listEventComponent, this.eventContainer);
    render(new EditEventView(this.event[0]), this.listEventComponent.getElement());

    for (let i = 1; i < this.event.length; i++) {
      render(new EventView(this.event[i]), this.listEventComponent.getElement());
    }
  };
}
