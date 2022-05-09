// import FiltersView from './view/list-filter';
// import SortView from './view/list-sort';

import { render } from './render';

import EventPresenter from './presenter/event-presenter';

import EventModel from './model/event-model';

const siteMainElement = document.querySelector('.page-body');
// const siteFiltersElement = siteMainElement.querySelector('.trip-controls__filters');
const siteContentElement = siteMainElement.querySelector('.trip-events');

const eventModel = new EventModel();
const eventPresenter = new EventPresenter();

// render(new FiltersView(), siteFiltersElement);
// render(new SortView(), siteContentElement);

eventPresenter.init(siteContentElement, eventModel);
