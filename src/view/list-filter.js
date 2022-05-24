import AbstractView from '../framework/view/abstract-view';

const createFilters = () => {
  const filterElement = (
    `<div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>`
  );
  return (
    `<div class="trip-main">
      <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

          <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
      </section>

      <div class="trip-main__trip-controls  trip-controls">
        <div class="trip-controls__filters">
          <h2 class="visually-hidden">Filter events</h2>
          <form class="trip-filters" action="#" method="get">
             ${filterElement}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>
        </div>
      </div>

      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    </div>`
  );
};

export default class FiltersView extends AbstractView {
  get template() {
    return createFilters();
  }
}
