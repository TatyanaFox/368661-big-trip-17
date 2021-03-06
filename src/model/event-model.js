import {generatePoint} from '../mock/points';
import {generateOffers} from '../mock/offer';

export default class EventModel {
  #point = Array.from({length: 3}, generatePoint);
  #offer = Array.from({length: 5}, generateOffers);
  get point() {
    return this.#point;
  }

  get offer() {
    return this.#offer;
  }
}
