import { render } from './framework/render.js';

import HeaderView from './view/header-view';
import FiltersView from './view/list-filter';
import NewEventButtonView from './view/new-event-button-view';
import SortView from './view/list-sort';

import EventPresenter from './presenter/event-presenter';

import EventModel from './model/event-model';
import {generateFilter} from './mock/filter';

const siteMainElement = document.querySelector('.page-body');
const siteHeaderElement = siteMainElement.querySelector('.trip-main');
const siteContentElement = siteMainElement.querySelector('.trip-events');

const eventModel = new EventModel();
const eventPresenter = new EventPresenter();

const filters = generateFilter(eventModel.point);

render((new HeaderView()), siteHeaderElement);
render((new FiltersView(filters)), siteHeaderElement);
render((new NewEventButtonView()), siteHeaderElement);
render(new SortView(), siteContentElement);

eventPresenter.init(siteContentElement, eventModel);
